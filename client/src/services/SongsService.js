import Api from '@/services/Api'

export default {
  getAllSongs (searchParams) {
    return Api().get('songs', {
      params: {
        search: searchParams
      }
    })
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
