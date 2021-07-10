<template lang="pug">
h1 No content yet
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('home', ['mockData'])
  }
}
</script>