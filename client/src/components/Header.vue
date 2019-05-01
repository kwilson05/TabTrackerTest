<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      TabTracker
    </v-toolbar-title>
    <v-spacer> </v-spacer>
    <v-toolbar-items>
      <v-btn flat dark @click="navigateTo({name: 'register'})">
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
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
