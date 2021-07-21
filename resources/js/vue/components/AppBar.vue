<template lang="pug">
v-app-bar(app :hide-on-scroll="!$_IS_TOUCH_SCREEN")
  ToolTip(message="Side Drawer")
    v-app-bar-nav-icon(@click.stop="toggle")
  v-spacer
  ToolTip(message="Settings")
    v-btn(icon @click.stop="toggleSide")
      v-icon mdi-settings-outline
  v-divider(vertical class="mx-1" inset)
  v-menu(open-on-hover transition="slide-y-transition" offset-y)
    template(v-slot:activator="{ on, attrs}")
      v-btn(depressed height="100%" v-bind="attrs" v-on="on")
        v-toolbar-title Username
    v-card(class="pa-3")
      v-list
        v-list-item(v-for="(item, i) in listItem" :key="i" :link="!!item.to" :to="item.to")
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
    },
    toggleSide: {
      type: Function,
      required: true
    }
  },
  data: () => ({
    listItem: [
      { icon: 'mdi-account-circle', title: 'Show Case', subtitle: 'Auth：Admin' },
      { icon: 'mdi-account-details', title: 'Profile', to: 'login' },
      { icon: 'mdi-exit-to-app', title: 'Logout', to: 'login' }
    ]
  }),
}
</script>