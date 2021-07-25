<template lang="pug">
v-footer(padless absolute app)
  v-card(width="100%")
    v-card-text
      v-row(no-gutters justify="center")
        v-btn(v-for="(icon, i) in icons" :key="i" icon class="mx-4")
          ToolTip(:message="$t(`footer.tooltip.${icon.hint}`)")
            v-icon {{ icon.name }}
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
  data: () => ({
    icons: [
      { name: 'mdi-home', hint: 'home' },
      { name: 'mdi-email', hint: 'email' },
    ]
  })
}
</script>