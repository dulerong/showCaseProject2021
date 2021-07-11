<template lang="pug">
v-snackbar(:value="isShow" top :right="right" :timeout="timeout" :color="color" transition="slide-y-transition") {{ message }}
  template(v-slot:action="{ attrs }")
    v-btn(text v-bind="attrs" @click="hideNotification") Close
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  computed: {
    ...mapState('notification', ['isShow', 'message', 'timeout', 'color', 'right'])
  },
  methods: {
    ...mapMutations('notification', ['hideNotification'])
  }
}
</script>