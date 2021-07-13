<template lang="pug">
v-menu(v-model="menu" :close-on-content-click="false" min-width="auto" ref="menu" :disabled="isDisabled")
  template(v-slot:activator="{ on, attrs }")
    v-text-field(v-model="valuePicked" :label="label" :rules="rules" readonly v-bind="attrs" v-on="on" outlined background-color="field")
  v-time-picker(
    v-model="valuePicked"
    format="24hr"
    :allowed-minutes="allowedStep"
    @click:minute="$refs.menu.save(valuePicked)"
  )
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    timeData: {
      default: null
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  data: (vm) => ({
    menu: false,
    rules: [vm.$_validation.required],
    valuePicked: null
  }),
  watch: {
    valuePicked: function(val) {
      this.$emit('time-picked', val)
    },
    timeData: function (val) {
      if (val) this.valuePicked = val
    }
  },
  created() {
    if (this.timeData) this.valuePicked = this.timeData
  },
  methods: {
    allowedStep(m) {
      return m % 15 === 0
    }
  }
}
</script>

<style lang="sass" scoped>

</style>