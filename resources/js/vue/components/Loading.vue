<template lang="pug">
.Loading(v-if="isLoading")
  v-progress-circular(:width='8' :size='100' color='#999' indeterminate)
  h1 {{ message + '...'}}
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('loading', ['isLoading', 'message']),
  },
}
</script>

<style scoped>
.Loading {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, .80);
  z-index: 1000;
}
</style>
