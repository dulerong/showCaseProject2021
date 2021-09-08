<template lang="pug">
v-app-bar(
  app
  flat
  height="64"
  outlined
)
  ToolTip(:message="$t('appBar.tooltip.sideDrawer')")
    v-app-bar-nav-icon(@click.stop="toggle" data-testid="toggleButton")
  v-spacer
  MenuLanguage
  ToolTip(:message="$t('appBar.otherSettings')")
    v-btn(icon @click.stop="toggleSide" data-testid="toggleSideButton")
      v-icon mdi-settings-outline
  v-divider(vertical class="mx-1" inset)
  AppBarProfileMenu
</template>

<script>
export default {
  components: {
    ToolTip: require('~components/ToolTip').default,
    MenuLanguage: require('~components/MenuLanguage').default,
    AppBarProfileMenu: require('~components/AppBarProfileMenu').default,
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
}
</script>