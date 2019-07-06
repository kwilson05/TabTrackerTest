<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-items>
      <v-btn class="mr-4" flat dark :to="{name: 'songs'}">
        TabTracker

      </v-btn>

        <v-btn class="mr-4" flat dark :to="{name: 'songs'}">
        Browse
      </v-btn>

    </v-toolbar-items>
    <v-spacer> </v-spacer>
    <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLoggedIn" class="mr-4" flat dark :to="{name: 'login'}">
        Login
      </v-btn>
      <v-btn v-if="$store.state.isUserLoggedIn" class="mr-4" flat dark @click="logout">
        Log Out
      </v-btn>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark :to="{name: 'register'}">
        Sign Up
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'login'
      })
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
