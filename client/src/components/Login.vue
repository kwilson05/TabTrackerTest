<template>
  <v-layout justify-center row>
    <v-flex md7 lg6 xs10 sm10 xl5>
      <panel title="Login">
        <form name="tab-tracker-login-form">
          <v-text-field label="Email" v-model="email" />
          <br>
          <v-text-field label="Password" type="password" v-model="password" />
          <br>
          <div v-html="error" class="danger-alert"> </div>
          <br>
          <v-btn dark class="cyan" @click="login">
            Login</v-btn>
        </form>
      </panel>
    </v-flex>
  </v-layout>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  components: {

  },
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })

        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
        name : 'songs'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
