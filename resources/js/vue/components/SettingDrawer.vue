<template lang="pug">
v-navigation-drawer(app temporary right v-model="sideDrawer.isMini")
  v-list-item
    v-list-item-content
      v-list-item-title(class="text-h6") Settings
  v-divider
  v-list-item
    v-list-item-content
      v-list-item-title Theme
      v-row(no-gutters justify="space-around")
        v-btn(@click="toggleThemeLight" :color="!isDark ? 'success' : '' ")
          v-icon(left) mdi-weather-sunny
          | Light
        v-btn(@click="toggleThemeDark" :color="isDark ? 'success' : '' ")
          v-icon(left) mdi-weather-night
          | Dark
</template>

<script>
export default {
  props: {
    sideDrawer: {
      type: Object,
      required: true,
      isMini: { type: Boolean, required: true }
    }
  },
  computed: {
    isDark() {
      return this.$vuetify.theme.dark
    }
  },
  methods: {
    toggleThemeLight() {
      this.$vuetify.theme.dark = false
    },
    toggleThemeDark() {
      this.$vuetify.theme.dark = true
    }
  }
};
</script>