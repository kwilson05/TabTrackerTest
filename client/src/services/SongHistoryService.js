import Api from '@/services/Api'

export default {
  getAllSongHistory(params) {
    return Api().get('history', {
      params: params
    })
  },
  addSongHistory(history) {
    return Api().post('history', history)
  }

}
