<template>
  <v-layout row>
    <v-flex md7 lg6 xs10 sm10 xl5>
      <panel title="Songs MetaData">
        <v-text-field label="Title" v-model="song.title" required :rules="[required]" />
        <v-text-field label="Artist" v-model="song.artist" required :rules="[required]" />
        <v-text-field label="Genre" v-model="song.genre" required :rules="[required]" />
        <v-text-field label="Album" v-model="song.album" required :rules="[required]" />
        <v-text-field label="Album Image Url" v-model="song.albumImageUrl" required :rules="[required]" />
        <v-text-field label="YouTube Id" v-model="song.youtubeId" required :rules="[required]" />
      </panel>
    </v-flex>
    <v-flex md7 lg6 xs10 sm10 xl5>
      <panel title="Songs Structure" class="ml-2">
        <v-textarea label="Tab" v-model="song.tab" required :rules="[required]" />
        <v-textarea label="Lyrics" v-model="song.lyrics" required :rules="[required]" />
      </panel>
      <div class="danger-alert" v-if="error">
        {{error}}
      </div>
      <v-btn dark class="cyan" @click="save">
        Save</v-btn>
    </v-flex>
  </v-layout>
</template>
<script>

import SongsService from '@/services/SongsService'

export default {
  components: {

  },
  data () {
    return {
      song: {},
      error: null,
      required: (value) => !!value || 'Required...'

    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.showSong(songId)).data
  },
  methods: {
    async save () {
      this.error = null
      const areAllFieldsFilledIn = Object.keys(this.song).every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      try {
        await SongsService.saveSong(this.song)
        this.$router.push({
          name: 'song',
          params: { songId: this.song.id }
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
