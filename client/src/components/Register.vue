<template>
  <v-layout justify-center row>
    <v-flex  md7 lg6 xs10 sm10 xl5 >
      <div class="white elevation-2">

        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field label="Email"  v-model="email"/>
          <br>
          <v-text-field label="Password"   v-model="password" />
          <br>
          <div v-html="error" class="err"> </div>
          <br>
          <v-btn dark class="cyan" @click="register">
            Register</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
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
        await AuthenticationService.register({
          email: this.email,
          password: this.password
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
.err {
  color: red
}
</style>
