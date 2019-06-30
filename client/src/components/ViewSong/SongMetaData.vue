<template>
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
        <v-btn dark class="cyan" @click="navigateTo ({name: 'songs-edit', params: {songId: song.id}})">
          Edit</v-btn>
      </v-flex>
      <v-flex xs6>
        <img class="album-image" :src="song.albumImageUrl" />
        <br>
        {{song.album}}
      </v-flex>
    </v-layout>
  </panel>
</template>
<script>
import Panel from '@/components/Panel'
export default {
  name: 'SongMetaData',
  components: {
    Panel
  },
  props: [
    'song'
  ],
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

textarea {
  font-family: monospace;
  overflow: auto;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  padding: 40px;

}

</style>
