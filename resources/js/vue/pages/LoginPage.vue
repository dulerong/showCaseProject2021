<template lang="pug">
v-card(class="mx-auto pa-4" style="width: 375px")
  h1 {{ greetingMessage }},
  v-form
    v-text-field(
      :label="$t('login.textField.username.label')"
      v-model="username"
      :hint="$t('login.textField.username.hint')"
      clearable
    )
    v-text-field(
      :label="$t('login.textField.password.label')"
      v-model="password"
      :type="showPassword? 'text' : 'password' "
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      :hint="$t('login.textField.password.hint')"
      @click:append="showPassword = !showPassword"
      clearable
    )
  v-row(no-gutters justify="space-between" class="mt-5")
    v-btn(depressed :loading="loading" @click="login") 
      v-icon(left) mdi-login
      | {{ $t("login.button.login") }}
    v-btn(outlined)
      v-icon(left) mdi-clipboard-account
      | {{ $t("login.button.signUp") }}
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  created() {
    this.greetingMessage = this.makeGreetMessage(this.$_hour_right_now)
  },
  data: () => ({
    greetingMessage: null,
    username: null,
    password: null,
    showPassword: false,
    loading: false,
  }),
  methods: {
    ...mapMutations('notification', ['showNotification']),
    makeGreetMessage(time) {
      switch(true) {
        case time < 12:
          return this.$t("login.greeting.morning")
        case time >= 12 && time < 18:
          return this.$t("login.greeting.afternoon")
        case time >= 18 && time <= 23:
          return this.$t("login.greeting.evening")
      }
    },
    login() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.$router.push({ name: this.$_routePath.home.name })
        this.showNotification({ message: this.$t("login.greeting.welcome") })
      }, 2500)
    }
  }
}
</script>