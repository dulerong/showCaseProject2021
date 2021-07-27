<template lang="pug">
v-menu(:open-on-hover="!$_IS_TOUCH_SCREEN" transition="slide-y-transition" offset-y)
  template(v-slot:activator="{ on, attrs }")
    v-btn(text class="pa-0" v-bind="attrs" v-on="on")
      v-icon mdi-translate
      v-icon(small) mdi-chevron-down
  v-card(class="px-2")
    v-list
      v-list-item
        v-list-item-content(class="font-weight-bold") {{ $t('appBar.translate') }}
      v-list-item(v-for="(item, i) in listLanguages" :key="item.value" link :to="{ params: { lang: item.value }}")
        v-list-item-content {{ item.title }}
</template>

<script>
export default {
  data: () => ({
    listLanguages: [
      { title: 'English', value: 'en' },
      { title: '中文', value: 'ch' },
    ]
  })
}
</script>