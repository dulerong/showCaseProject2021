<template lang="pug">
v-app-bar(app hide-on-scroll)
  ToolTip(message="ナビバー")
    v-app-bar-nav-icon(@click.stop="toggle")
  v-spacer
  v-menu(open-on-hover transition="slide-y-transition" offset-y)
    template(v-slot:activator="{ on, attrs}")
      v-btn(depressed height="100%" v-bind="attrs" v-on="on")
        v-toolbar-title Username
    v-card(class="pa-3")
      v-list
        v-list-item(v-for="(item, i) in listItem" :key="i" link)
          v-list-item-icon
            v-icon(:x-large="item.icon === 'mdi-account-circle'") {{ item.icon }}
          v-list-item-content
            v-list-item-title {{ item.title }}
            v-list-item-subtitle(v-if="!!item.subtitle") {{ item.subtitle }}
        //- v-list-item
        //-   v-list-item-icon
        //-     v-icon(x-large) mdi-account-circle
        //-   v-list-item-content
        //-     v-list-item-title Tokyo Gyosei
        //-     v-list-item-subtitle 権限：管理者
        //- v-list-item
        //-   v-list-item-icon
        //-     v-icon mdi-account-details
        //-   v-list-item-content
        //-     v-list-item-title プロフィール
        //- v-list-item(@click="logout")
        //-   v-list-item-icon
        //-     v-icon mdi-exit-to-app
        //-   v-list-item-content
        //-     v-list-item-title ログアウト
</template>

<script>
export default {
  components: {
    ToolTip: require('~components/ToolTip').default
  },
  data: () => ({
    listItem: [
      { icon: 'mdi-account-circle', title: 'Show Case', subtitle: 'Auth：Admin' },
      { icon: 'mdi-account-details', title: 'Profile' },
      { icon: 'mdi-exit-to-app', title: 'Logout' }
    ]
  }),
  props: {
    toggle: {
      type: Function,
      required: true
    }
  },
}
</script>