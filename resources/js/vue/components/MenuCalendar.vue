<template lang="pug">
v-menu(v-model="menu" :close-on-content-click="false" min-width="auto" :disabled="isDisabled") 
  template(v-slot:activator="{ on, attrs }")
    v-text-field(v-model="valuePicked" :label="label" :rules="rules" readonly v-bind="attrs" v-on="on" outlined background-color="field")
  v-date-picker(v-model="valuePicked" @change="menu = false" :day-format="date => new Date(date).getDate()")
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    dateData: {
      default: null
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  data: (vm) => ({
    menu: false,
    valuePicked: vm.$_dateTodayYYYYMMDD,
    rules: [vm.$_validation.required],
  }),
  watch: {
    valuePicked: function (val) {
      this.$emit('date-picked', val)
    },
    dateData: function (val) {
      if (val) this.valuePicked = val
    }
  },
  created() {
    if (this.dateData) this.valuePicked = this.dateData
  }
}
</script>

<style lang="sass" scoped>

</style>