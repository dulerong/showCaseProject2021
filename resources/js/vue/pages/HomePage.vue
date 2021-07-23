<template lang="pug">
h1 Home page, no content yet, coming soon later...7/21...
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('home', ['mockData'])
  }
}
</script>