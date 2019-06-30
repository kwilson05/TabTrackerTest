<template>
  <panel title="Youtube Video">
    <youtube :video-id="youtubeId" :player-width="500" :player-height="500"></youtube>
  </panel>
</template>
<script>
import Panel from '@/components/Panel'
import VueYouTubeEmbed, {YouTubePlayer} from 'vue-youtube-embed'
import Vue from 'vue'
Vue.use(VueYouTubeEmbed, { global: false })

export default {
  name: 'Youtube',
  components: {
    Panel,
    'youtube': YouTubePlayer
  },
  props: [
    'youtubeId'
  ]
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
