import Api from '@/services/Api'

export default {
  getAllBookMarks(searchParams) {
    return Api().get('bookmarks', {
      params: {
        songId: searchParams.songId,
        userId: searchParams.userId
      }
    })
  },
  addBookMark(bookmark) {
    return Api().post('bookmarks', bookmark )
  },
  removeBookMark(bookmarkId) {
    return Api().delete(`bookmarks/${bookmarkId}`)
  }

}
