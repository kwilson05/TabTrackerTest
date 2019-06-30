import Api from '@/services/Api'

export default {
  getAllSongs () {
    return Api().get('songs')
  },
  showSong (songId) {
    return Api().get(`songs/${songId}`)
  },
  createSong (song) {
    return Api().post('songs', song)
  },
  saveSong (song) {
    return Api().put(`songs/${song.id}`, song)
  }
}
