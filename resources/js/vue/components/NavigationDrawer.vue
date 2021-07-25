<template lang="pug">
v-navigation-drawer(app temporary v-model="drawer.isMini")
  v-list-item
    v-list-item-content
      v-list-item-title(class="text-h6") {{ $t("naviDrawer.mainTitle") }}
      v-list-item-subtitle {{ $t("naviDrawer.subTitle") }}
  v-divider
  v-list
    v-list-group(v-for="(subgroup, i) in $_navigation" :key="i" :value="false")
      template(v-slot:activator="")
        v-list-item-title(v-text="$t(`naviDrawer.${subgroup.title}.name`)")
      v-list-item(v-for="(tab, i) in subgroup.children" :key="i" :to="{ name: tab.name, params: { lang: $route.params.lang } }" exact)
        v-list-item-icon(class="mr-2")
          v-icon(style="width: 20px") {{ tab.icon }}
        v-list-item-content
          v-list-item-title(v-text="$t(`naviDrawer.${subgroup.title}.children.${tab.name}`)")
</template>

<script>
export default {
  props: {
    drawer: {
      type: Object,
      required: true,
      isMini: { type: Boolean, required: true }
    }
  },
};
</script>