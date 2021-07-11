<template lang="pug">
v-app
  AppBar(v-bind='drawer')
  NavigationDrawer(:drawer='drawer')
  v-main
    div(class="pa-4 mx-auto" style="max-width: 1280px; height: 100%")
      slot
  SnackBar
  Footer
</template>

<script>
export default {
  components: {
    AppBar: require('~components/AppBar').default,
    NavigationDrawer: require('~components/NavigationDrawer').default,
    SnackBar: require('~components/SnackBar').default,
    Footer: require('~components/Footer').default,
  },
  data: (vm) => ({
    drawer: {
      isMini: false,
      toggle: vm.toggleDrawer
    }
  }),
  methods: {
    toggleDrawer() {
      this.drawer.isMini = !this.drawer.isMini
    }
  }
}
</script>