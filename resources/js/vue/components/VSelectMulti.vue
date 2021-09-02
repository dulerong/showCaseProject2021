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
    dataSelected: {
      required: true,
      type: Array,
    },
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
    selected: [],
  }),
  watch: {
    selected: function(val) {
      this.$emit('selected-data', val)
    },
    dataSelected: function(val) {
      this.selected = val
    }
  },
}
</script>