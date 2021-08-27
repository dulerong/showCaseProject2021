<template lang="pug">
v-select(
  :label="label"
  :items="items"
  v-model="selected"
  item-text="name"
  item-value="value"
  multiple
  chips
  clearable
  :data-testid="dataTestID"
)
</template>

<script>
export default {
  props: {
    label: {
      required: true,
      type: String,
    },
    items: {
      required: true,
      type: Array,
    },
    dataTestID: {
      required: false,
      type: String,
      default: ''
    }
  },
  data: () => ({
    selected: null,
  }),
  watch: {
    selected: function(val) {
      this.$emit('selected-data', val)
    }
  },
}
</script>