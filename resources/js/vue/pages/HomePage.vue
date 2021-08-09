<template lang="pug">
div
  h1 {{ $t("home.title") }}
  div(class="mt-1")
    h3 {{ $t("home.content") }}
    ol
      li {{ $t("home.page.first") }}
      li {{ $t("home.page.second") }}
  div(class="mt-1")
    h3 {{ $t("home.description") }}
    ul
      li Vue Router
      li Vuex
      li Vuetify
      li Vue-i18n
      li Axios
      li Vue-test-utils
      li Jest
      li Cypress
      li Eslint integrated with Prettier
      li Pug
      li Sass
      li Day.js
      li ApexCharts
</template>

<script>
export default {

}
</script>