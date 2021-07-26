<template lang="pug">
v-app-bar(app :hide-on-scroll="!$_IS_TOUCH_SCREEN")
  ToolTip(:message="$t('appBar.tooltip.sideDrawer')")
    v-app-bar-nav-icon(@click.stop="toggle")
  v-spacer
  MenuLanguage
  ToolTip(:message="$t('appBar.translate')")
    v-btn(icon @click.stop="toggleSide")
      v-icon mdi-settings-outline
  v-divider(vertical class="mx-1" inset)
  v-menu(:open-on-hover="!$_IS_TOUCH_SCREEN" transition="slide-y-transition" offset-y)
    template(v-slot:activator="{ on, attrs}")
      v-btn(depressed height="100%" v-bind="attrs" v-on="on")
        v-toolbar-title Username
    v-card(class="pa-3")
      v-list
        v-list-item
          v-list-item-icon
            v-icon mdi-account-circle
          v-list-item-content
            v-list-item-title Show Case
            v-list-item-subtitle Auth: Admin
        v-list-item(v-for="(item, i) in listItem" :key="i" :to="{ name: item.to, params: { lang: $route.params.lang } }" exact)
          v-list-item-icon
            v-icon(:x-large="item.icon === 'mdi-account-circle'") {{ item.icon }}
          v-list-item-content
            v-list-item-title {{ $t(`appBar.userButton.${item.title}`) }}
</template>

<script>
export default {
  components: {
    ToolTip: require('~components/ToolTip').default,
    MenuLanguage: require('~components/MenuLanguage').default
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
      { icon: 'mdi-account-details', title: 'profile', to: 'login' },
      { icon: 'mdi-exit-to-app', title: 'logout', to: 'login' }
    ],
  }),
}
</script>