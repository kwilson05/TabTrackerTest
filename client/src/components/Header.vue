<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-items>
      <v-btn class="mr-4" flat dark @click="navigateTo({name: 'root'})">
        TabTracker

      </v-btn>

        <v-btn class="mr-4" flat dark @click="navigateTo ({name: 'songs'})">
        Browse
      </v-btn>

    </v-toolbar-items>
    <v-spacer> </v-spacer>
    <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLoggedIn" class="mr-4" flat dark @click="navigateTo ({name: 'login'})">
        Login
      </v-btn>
      <v-btn v-if="$store.state.isUserLoggedIn" class="mr-4" flat dark @click="logout">
        Log Out
      </v-btn>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark @click="navigateTo({name: 'register'})">
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
        name: 'root'
      })
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
