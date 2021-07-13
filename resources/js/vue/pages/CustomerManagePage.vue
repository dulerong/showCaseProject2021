<template lang="pug">
div
  CSVPreview(
    :dialogCSV="dialogCSV"
    @close-dialog-csv="dialogCSV = false"
    @open-dialog-register="dialogRegister = true"
  )
  CSVRegister(
    :dialogRegister="dialogRegister"
    @close-dialog-register="dialogRegister = false"
  )
  CSVDownload(
    :dialogDownload="dialogDownload"
    @close-dialog-download="dialogDownload = false"
    @download-csv="download"
  )
  CSVDownloadFinish(
    :dialogDownloadFinish="dialogDownloadFinish"
    @close-dialog-download-finish="dialogDownloadFinish = false"
    :itemsDownloaded="customers.length"
  )
  v-row(no-gutters align="center")
    h1(class="mr-5") 顧客管理
    input(type="file" ref="file" @change="selectFile" style="display: none")
    v-btn(v-if="false" depressed color="primary" dark class="mr-5" @click="$refs.file.click()") CSV取り込み
    v-btn(depressed color="primary" dark class="mr-5" @click="dialogDownload = true") CSVダウンロード
  v-card
    v-card-title 顧客一覧
    v-divider
    div(class="ma-4")
      v-row(no-gutters class="mb-4")
        div(style="width: 100px")
          v-select(v-model="itemPerPage" :items="itemPerPageList" @change="page = 1" outlined label="件表示" hide-details)
        v-spacer
        div(style="width: 200px")
          v-text-field(v-model="customerSearch" outlined prepend-inner-icon="mdi-magnify" hide-details label="氏名検索" clearable)
      v-row(class="header" no-gutters)
        v-col(cols=1) ID
        v-col(cols=2) 氏名
        v-col(cols=1) 年齢
        v-col 住所
        v-col(cols=2) 直近応対内容
        v-col(cols=1) 反響日時
        v-col(cols=1) 照会
      v-row(class="data" no-gutters v-for="(item, i) in customersDisplay" :key="i")
        v-col(cols=1) {{ item.customer_id }}
        v-col(cols=2) {{ item.customer_name | tenCharacter }}
        v-col(cols=1) {{ item.customer_age }}
        v-col(class="justify-start pl-1") {{ item.customer_address }}
        v-col(cols=2) {{ item.customer_handling_content }}
        v-col(cols=1) {{ item.customer_situation_date | toYearMonthDay }}
        v-col(cols=1)
          v-btn(depressed @click="inquiry(item.customer_id)" class="ma-1") 照会
      v-row(no-gutters align="center")
        h4 {{ totalItems }} 件中 {{ totalItems === 0 ? 0 : startIndex + 1 }} から {{ totalItems === 0 ? 0 : finalIndex }} まで表示
        v-spacer
        v-pagination(v-model="page" :length="totalPageLength" total-visible="10")
</template>

<script>
import { clientList } from '~/js/mockData/clientList'
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  components: {
    CSVPreview: require('~components/crm/csv/CSVPreview').default,
    CSVRegister: require('~components/crm/csv/CSVRegister').default,
    CSVDownload: require('~components/crm/csv/CSVDownload').default,
    CSVDownloadFinish: require('~components/crm/csv/CSVDownloadFinish').default
  },
  async created() {
    await this.retrieveOwnCustomers({ page: 1, per_page: 1000000 })
  },
  data: () => ({
    itemPerPageList: [ 5, 10, 15, 20, 25, 50, 100, 500 ],
    page: 1,
    itemPerPage: 25,
    customerSearch: null,
    dialogCSV: false,
    dialogRegister: false,
    dialogDownload: false,
    dialogDownloadFinish: false,
  }),
  computed: {
    ...mapState('customerManage', ['customers', 'customersDialog', 'file']),
    totalItems() {
      return this.customerSearch === null ?
        this.customers.length :
        this.customers.filter(item => item.customer_name.includes(this.customerSearch)).length
    },
    totalPageLength() {
      return Math.ceil(this.totalItems / this.itemPerPage)
    },
    startIndex() {
      return this.page * this.itemPerPage - this.itemPerPage
    },
    finalIndex() {
      return this.page === this.totalPageLength ? this.totalItems : this.page * this.itemPerPage
    },
    customersDisplay() {
      return this.customerSearch === null ? 
        this.customers.slice(this.startIndex, this.finalIndex) : 
        this.customers.filter(item => item.customer_name.includes(this.customerSearch)).slice(this.startIndex, this.finalIndex)
    }
  },
  watch: {
    customersDisplay: function () {
      this.page = 1
    }
  },
  methods: {
    ...mapActions('customerManage', ['retrieveOwnCustomers', 'loadCSV']),
    ...mapMutations('customerManage', ['setCustomersDialog', 'setFile']),
    ...mapMutations('loading', ['loadingStart', 'loadingStop']),
    inquiry(id) {
      this.$router.push({ name: this.$_routePath.inquiry.name, params: { id: id } })
    },
    async selectFile() {
      this.loadingStart('CSVデータ読込中')

      const vm = this
      
      await this.loadCSV(vm.$refs.file.files[0])
        .then(() => {
          vm.dialogCSV = true
          vm.loadingStop()
        })
    },
    download() {
      const data = this.$_language('EngToJpn', this.customers)
      const csv = this.$papa.unparse(data)
      this.$papa.download(csv, 'example')
      this.dialogDownloadFinish = true
    },
  }
};
</script>

<style lang="sass" scoped>
@import 'GlobalSass'

h1, h2, h3, h4, h5, h6
  font-weight: $font-weight-regular

.v-card
  @include card-styling

.v-btn
  border: $btn-border

.header .col
  @include table-header

.data .col
  @include table-data

</style>