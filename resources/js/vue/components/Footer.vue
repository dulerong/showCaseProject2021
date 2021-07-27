<template lang="pug">
v-footer(padless absolute app)
  v-card(width="100%")
    v-card-text
      v-row(no-gutters justify="center")
        v-btn(v-for="(item, i) in $_footer_navigation" :key="i" icon class="mx-4" :to="{ name: item.name, params: { lang: $i18n.locale } }" exact)
          ToolTip(:message="$t(`footer.tooltip.${item.name}`)")
            v-icon {{ item.icon }}
    v-divider
    v-card-text
      v-row(no-gutters justify="center")
        h1 {{ $_dateToday.format('YYYY') }} - Codey Du
</template>

<script>
export default {
  components: {
    ToolTip: require('~components/ToolTip').default,
  },
}
</script>