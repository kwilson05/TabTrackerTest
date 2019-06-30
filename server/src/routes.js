const Authentication = require('./controllers/Authentication')
const AuthenticationPolicy = require('./policies/AuthenticationPolicy')
const SongsController = require('./controllers/SongsController')

module.exports = (app) => {
    app.post('/register',
        AuthenticationPolicy.register,
        Authentication.register)

    app.post('/login', Authentication.login)

    app.get('/songs', SongsController.getAllSongs)

    app.get('/songs/:songId', SongsController.showSong)

    app.put('/songs/:songId', SongsController.saveSong)

    app.post('/songs', SongsController.createSong)
}
