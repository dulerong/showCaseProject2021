<template lang="pug">
v-menu(:open-on-hover="!$_IS_TOUCH_SCREEN" transition="slide-y-transition" offset-y)
  template(v-slot:activator="{ on, attrs }")
    v-btn(text class="pa-0" v-bind="attrs" v-on="on" data-testid="menu-language")
      v-icon mdi-translate
      v-icon(small) mdi-chevron-down
  v-card(class="px-2")
    v-list
      v-list-item
        v-list-item-content(class="font-weight-bold") {{ $t('appBar.translate') }}
      v-list-item(v-for="(item, i) in $_AVAILABLE_LANG_LIST" :key="item.value" link :to="{ params: { lang: item.value }}")
        v-list-item-content {{ item.title }}
</template>

<script>
export default {
  
}
</script>