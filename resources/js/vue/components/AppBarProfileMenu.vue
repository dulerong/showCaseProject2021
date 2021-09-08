<template lang="pug">
v-menu(
  :open-on-hover="!$_IS_TOUCH_SCREEN"
  transition="slide-y-transition"
  offset-y
)
  template(v-slot:activator="{ on, attrs}")
    v-btn(
      depressed
      color="white"
      height="100%"
      v-bind="attrs"
      v-on="on"
      data-testid="profileMenu"
    )
      v-toolbar-title Username
  v-card(class="pa-3")
    v-list
      v-list-item
        v-list-item-icon
          v-icon mdi-account-circle
        v-list-item-content
          v-list-item-title Show Case
          v-list-item-subtitle Auth: Admin
      v-list-item(
        v-for="(item, i) in listItem"
        :key="i"
        :to="{ name: item.to, params: { lang: $route.params.lang } }"
        exact
      )
        v-list-item-icon
          v-icon {{ item.icon }}
        v-list-item-content
          v-list-item-title {{ $t(`appBar.userButton.${item.title}`) }}
</template>

<script>
export default {
  data: () => ({
    listItem: [
      { icon: 'mdi-account-details', title: 'profile', to: 'login' },
      { icon: 'mdi-exit-to-app', title: 'logout', to: 'login' }
    ],
  }),
}
</script>