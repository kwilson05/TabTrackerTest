<template>
  <panel title="Lyrics">
    <v-textarea readonly rows="20" v-model="song.lyrics" />
  </panel>
</template>
<script>
import Panel from '@/components/Panel'
export default {
  name: 'Lyrics',
  components: {
    Panel
  },
  props: [
    'song'
  ]
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
