<template lang="pug">
v-app-bar(app :hide-on-scroll="!isMobile")
  ToolTip(message="Side Drawer")
    v-app-bar-nav-icon(@click.stop="toggle")
  v-spacer
  v-menu(open-on-hover transition="slide-y-transition" offset-y)
    template(v-slot:activator="{ on, attrs}")
      v-btn(depressed height="100%" v-bind="attrs" v-on="on")
        v-toolbar-title Username
    v-card(class="pa-3")
      v-list
        v-list-item(v-for="(item, i) in listItem" :key="i" link)
          v-list-item-icon
            v-icon(:x-large="item.icon === 'mdi-account-circle'") {{ item.icon }}
          v-list-item-content
            v-list-item-title {{ item.title }}
            v-list-item-subtitle(v-if="!!item.subtitle") {{ item.subtitle }}
</template>

<script>
export default {
  components: {
    ToolTip: require('~components/ToolTip').default
  },
  props: {
    toggle: {
      type: Function,
      required: true
    }
  },
  data: () => ({
    listItem: [
      { icon: 'mdi-account-circle', title: 'Show Case', subtitle: 'Auth：Admin' },
      { icon: 'mdi-account-details', title: 'Profile' },
      { icon: 'mdi-exit-to-app', title: 'Logout' }
    ]
  }),
  computed: {
    isMobile() {
      return navigator.maxTouchPoints > 0
    }
  },
}
</script>