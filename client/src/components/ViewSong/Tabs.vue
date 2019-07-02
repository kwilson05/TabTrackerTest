<template>
  <panel title="Tabs">
    <v-textarea readonly rows="20" v-model="song.tab" />
  </panel>
</template>
<script>

export default {
  name: 'Tabs',
  components: {

  },
  props: [
    'song'
  ]
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
