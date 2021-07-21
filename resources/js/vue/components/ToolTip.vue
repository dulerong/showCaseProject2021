<template lang="pug">
v-tooltip(:bottom="isAlign('bottom')" :top="isAlign('top')" :left="isAlign('left')" :right="isAlign('right')" :disabled="isMobile")
  template(v-slot:activator="{ on, attrs }")
    div(v-bind="attrs" v-on="on")
      slot
  span {{ message ? message : 'ToolTip' }}
</template>

<script>
export default {
  props: {
    align: {
      type: String,
      default: 'bottom'
    },
    message: {
      type: String,
    }
  },
  computed: {
    isMobile() {
      return navigator.maxTouchPoints > 0
    }
  },
  methods: {
    isAlign(self) {
      return this.align === self
    }
  }
}
</script>