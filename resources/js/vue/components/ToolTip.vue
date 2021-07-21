<template lang="pug">
v-tooltip(:bottom="isAlign('bottom')" :top="isAlign('top')" :left="isAlign('left')" :right="isAlign('right')" :disabled="$_IS_TOUCH_SCREEN")
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
  methods: {
    isAlign(self) {
      return this.align === self
    }
  }
}
</script>