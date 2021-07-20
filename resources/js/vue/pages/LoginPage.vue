<template lang="pug">
v-card(class="mx-auto pa-4" style="width: 375px")
  h1 {{ greetingMessage }},
  h1 Login Page
  v-form
    v-text-field(
      label="User Name"
      v-model="username"
      hint="Showcase use only (You don't have to enter username)"
      clearable
    )
    v-text-field(
      label="Password"
      v-model="password"
      :type="showPassword? 'text' : 'password' "
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      hint="Showcase use only (You don't have to enter password)"
      @click:append="showPassword = !showPassword"
      clearable
    )
  v-row(no-gutters justify="space-between" class="mt-1")
    v-btn(depressed :loading="loading" @click="login") 
      v-icon(left) mdi-login
      | Login
    v-btn(outlined)
      v-icon(left) mdi-clipboard-account
      | Sign up
</template>

<script>
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
    makeGreetMessage(time) {
      switch(true) {
        case time < 12:
          return 'Good morning'
        case time >= 12 && time < 18:
          return 'Good afternoon'
        case time >= 18 && time <= 23:
          return 'Good evening'
      }
    },
    login() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.$router.push({ name: this.$_routePath.home.name })
      }, 2500)
    }
  }
}
</script>