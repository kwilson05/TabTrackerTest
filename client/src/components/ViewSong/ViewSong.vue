<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <songmetadata :song="song" />
      </v-flex>
      <v-flex xs6 class="ml-2 mb-2">
        <tabs :song="song" />
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs6>
        <youtube :youtubeId="song.youtubeId"/>
      </v-flex>
      <v-flex xs6 class="ml-2">
        <lyrics :song="song" />
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
import SongMetaData from './SongMetaData'
import Tabs from './Tabs'
import Lyrics from './Lyrics'
import Youtube from './Youtube'
export default {
  components: {
    Panel,
    'songmetadata': SongMetaData,
    Tabs,
    Lyrics,
    Youtube
  },
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.showSong(songId)).data
  },
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
