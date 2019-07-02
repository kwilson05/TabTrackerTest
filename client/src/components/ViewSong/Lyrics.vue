<template>
  <panel title="Lyrics">
    <v-textarea readonly rows="20" v-model="song.lyrics" />
  </panel>
</template>
<script>

export default {
  name: 'Lyrics',
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
