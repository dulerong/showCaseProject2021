<template lang="pug">
h1 No content yet, coming soon later...
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('home', ['mockData'])
  }
}
</script>