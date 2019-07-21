const Authentication = require('./controllers/Authentication')
const AuthenticationPolicy = require('./policies/AuthenticationPolicy')
const SongsController = require('./controllers/SongsController')
const BookMarksController = require('./controllers/BookMarksController')
const HistoryController = require('./controllers/HistoryController')

const isAuthenticated = require('./policies/isAuthenticated')

module.exports = (app) => {
    app.post('/register',
        AuthenticationPolicy.register,
        Authentication.register)

    app.post('/login', Authentication.login)

    app.get('/songs', SongsController.getAllSongs)

    app.get('/songs/:songId', SongsController.showSong)

    app.put('/songs/:songId', SongsController.saveSong)

    app.post('/songs', SongsController.createSong)

    app.get('/bookmarks', isAuthenticated, BookMarksController.getAllBookMarks)

    app.post('/bookmarks', isAuthenticated, BookMarksController.addBookMark)

    app.delete('/bookmarks/:bookmarkId', isAuthenticated, BookMarksController.removeBookMark)

    app.get('/history', isAuthenticated, HistoryController.getAllSongHistory)

    app.post('/history', isAuthenticated, HistoryController.addSongHistory)
}
