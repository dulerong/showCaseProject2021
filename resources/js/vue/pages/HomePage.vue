<template lang="pug">
h1 {{ $_language[$route.params.lang][$route.name].title }}
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('home', ['mockData'])
  }
}
</script>