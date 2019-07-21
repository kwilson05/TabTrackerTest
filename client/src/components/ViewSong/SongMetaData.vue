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
        <v-btn v-if="isUserLoggedIn && !bookmark" dark class="cyan" @click="bookMark">
          Bookmark</v-btn>
        <v-btn v-if="isUserLoggedIn && bookmark" dark class="cyan" @click="unBookMark">
          UnBookmark</v-btn>
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
import { mapState } from 'vuex'
import BookMarkService from '@/services/BookMarkService'
export default {
  name: 'SongMetaData',
  components: {

  },
  data() {
    return {
      bookmark: null
    }
  },
  props: [
    'song'
  ],
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  watch: {
    async song () {
      if (!this.isUserLoggedIn) {
        return
      }
      try {
        const bookmarks = (await BookMarkService.getAllBookMarks({
          songId: this.song.id,
        })).data

        if (bookmarks.length) {
          this.bookmark = bookmarks[0]
        }
      } catch (err) {
        console.log(err)
      }

    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    },
    async bookMark () {
      try {
        this.bookmark = (await BookMarkService.addBookMark({
          songId: this.song.id
        })).data

      } catch (error) {
        console.log(error)
      }
    },
    async unBookMark () {
      try {
        await BookMarkService.removeBookMark(this.bookmark.bookmarkId)
        this.bookmark = null
      } catch (error) {
        console.log(error)
      }
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
