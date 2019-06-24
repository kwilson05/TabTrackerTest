<template>
  <v-layout>
    <v-flex xs6>
      <panel title="Song MetaData">
        <v-layout>
          <v-flex xs6>
            <div class="song-title">
              {{song.title}}
            </div>
            <div class="song-artist">
              {{song.artist}}
            </div>
            <div class="song-genre">
              {{song.genre}}
            </div>
          </v-flex>
          <v-flex xs6>
            <img class="album-image" :src="song.albumImageUrl" />
            <br>
            {{song.album}}
          </v-flex>
        </v-layout>
      </panel>
    </v-flex>
    <v-flex xs6 class="ml-2">
      <panel  title="Tabs">
      <v-textarea readonly     rows="20"
 v-model="song.tab"  />
      </panel>
    </v-flex>
  </v-layout>
</template>
<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
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
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.song-title {
  font-size: 30px;
}

.song-title {
  font-size: 24px;
}

.song-genre {
  font-size: 18px;
}

.album-image {
  width: 70%;
  margin: 0 auto;
}

.v-textarea {
  font-family: monospace;
  overflow: auto;
  padding: 20px;

}
</style>
