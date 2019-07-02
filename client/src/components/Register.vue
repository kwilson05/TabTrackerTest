<template>
  <v-layout justify-center row>
    <v-flex md7 lg6 xs10 sm10 xl5>
      <panel title="Register">
        <form name="tab-tracker-form" auto-complete="off">
          <v-text-field label="Email" v-model="email" />
          <br>
          <v-text-field label="Password" type="password" auto-complete="new-password" v-model="password" />
          <br>
          <div v-html="error" class="err"> </div>
          <br>
          <v-btn dark class="cyan" @click="register">
            Register</v-btn>
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
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })

        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.err {
  color: red
}

</style>
