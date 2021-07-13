<template lang="pug">
div
  v-row(justify="start" align="end" no-gutters)
    span(class="text-h6") 画像 / ファイル
    span(class="text-caption ml-3") 手書きメモなどをカメラで撮影し保存、またはファイルを選択
  v-row(no-gutters class="my-3")
    input(type="file" ref="file" @change="addFile" style="display: none")
    ToolTip(align="right" message="ファイル・画像を登録")
      v-btn(v-if="isOwner" :color="salesPrimary" depressed dark @click="$refs.file.click()") 
        img(:src="`/images/icon/camera.svg`")
        v-divider(class="mx-2" vertical style="border-color: white")
        v-icon(small) mdi-plus
  h3(v-if="info.files.length === 0") 登録ファイル無し
  v-row(no-gutters v-for="(item, i) in info.files" :key="i" justify="space-between" align="center" class="my-3")
    h3(:style="`color: ${salesPrimary}`") {{ fileNameParser(item.filename) }}
    v-spacer
    div(v-if="isOwner" class="d-flex")
      ToolTip(align="left" message="詳細")
        v-btn(icon :color="salesPrimary" @click="inspectFile(item)")
          v-icon mdi-magnify
      ToolTip(align="right" message="削除")
        v-btn(icon :color="salesPrimary" @click="deleteFile(item)")
          v-icon mdi-trash-can-outline
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
export default {
  components: {
    ToolTip: require('~components/ToolTip').default,
  },
  computed: {
    ...mapGetters('salesTheme', ['salesPrimary']),
    ...mapGetters('customerInquiry', ['isOwner']),
    ...mapState('customerInquiry', ['info'])
  },
  methods: {
    ...mapActions('customerInquiry', ['retrieveCustomerInfo']),
    ...mapMutations('notification', ['showNotification']),
    fileNameParser(name) {
      return name.split('/').slice(-1)[0]
    },
    addFile() {
      const fileExtension = this.$_findFileExtension(this.$refs.file.files[0].name)
      const fileType = this.$refs.file.files[0].type

      if (this.$refs.file.files[0].size > this.$_MAX_UPLOAD_SIZE) {
        alert(`ファイルサイズ上限を超えました(上限：${this.$_MAX_UPLOAD_SIZE})`)
        this.$refs.file.value = null
        return
      }

      if (!this.$_checkAllowedFileFormat(fileExtension, fileType)) {
        alert(`ファイル種類が不正です(許可種類：${Object.keys(this.$_ALLOWED_FILE_FORMATS)})`)
        console.log(this.$refs.file.files[0])
        this.$refs.file.value = null
        return
      }

      const fileName = this.$refs.file.files[0].name

      let formData = new FormData()
      formData.append('file', this.$refs.file.files[0])
      formData.append('customer_id', this.info.customer.id)

      this.$_api.post(this.$_apiPath.customerFile.upload, formData, {
        headers: { 'Content-Type': 'multipart/form-data'}
      })
        .then(() => {
          this.retrieveCustomerInfo({ customer_id: this.info.customer.id })
          this.showNotification({ message: `${fileName}　追加しました`, color: this.salesPrimary })
        })
        .catch(() => console.log('error uploading file'))
      
      this.$refs.file.value = null
    },
    inspectFile(item) {
      const apiToCall = item.is_signature === 1 ?
        this.$_apiPath.signature.get :
        this.$_apiPath.customerFile.get

      const fileName = this.fileNameParser(item.filename)
      this.$_api.get(apiToCall + item.id, { responseType: 'blob' })
        .then((response) => {
          console.log(response)
          const fileURL = window.URL.createObjectURL(new Blob([response.data]))
          let fileLink = document.createElement('a')

          fileLink.href = fileURL
          fileLink.setAttribute('download', fileName)
          document.body.appendChild(fileLink)

          fileLink.click()
        })
    },
    deleteFile(item) {
      const fileName = this.fileNameParser(item.filename)
      const data = { customer_file_id : item.id }

      this.$_api.post(this.$_apiPath.customerFile.delete, data)
        .then(() => {
          this.retrieveCustomerInfo({ customer_id: this.info.customer.id })
          this.showNotification({ message: `${fileName}　削除しました`, color: this.salesPrimary })
        })
        .catch(() => console.log('error deleting file'))
    }
  }
}
</script>