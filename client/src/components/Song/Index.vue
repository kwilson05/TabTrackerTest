<template>
  <v-layout justify-center row>
    <v-flex md7 lg6 xs10 sm10 xl5 v-if="isUserLoggedIn">
      <songs-bookmarks class="mr-2" />
      <recently-viewed-songs class="mr-2 mt-2" />
    </v-flex>
    <v-flex :class="{
    xs12: !isUserLoggedIn,
    xs6: isUserLoggedIn
    }" >
      <songs-search-panel />
      <songs-panel class="mt-2" />
    </v-flex>
  </v-layout>
</template>
<script>
import { mapState } from 'vuex'
import SongsPanel from './SongsPanel'
import SongsService from '@/services/SongsService'
import SongSearchPanel from './SongsSearchPanel'
import SongsBookMarks from './SongsBookMarks'
import RecentlyViewedSongs from './RecentlyViewedSongs'

export default {
  components: {
    'songs-panel': SongsPanel,
    'songs-search-panel': SongSearchPanel,
    'songs-bookmarks': SongsBookMarks,
    'recently-viewed-songs': RecentlyViewedSongs
  },
  data() {
    return {
      songs: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    // do a request to the backend for all the songs
    this.songs = (await SongsService.getAllSongs()).data
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

</style>
