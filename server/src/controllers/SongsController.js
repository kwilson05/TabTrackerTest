const {Song} = require('../models')


module.exports = {
    async createSong (req, res) {
        try {
            const song = await Song.create(req.body)
            res.send(song)
        } catch (err) {
          console.log(err)
            res.status(500).send({
                error: 'An error occurred while trying to create a song'
            })
        }
    },
    async showSong (req, res) {
        try {
          const song = await Song.findByPk(req.params.songId)

          res.send(song)
        } catch (err) {
            res.status(500).send({
                error: 'Error occurred while trying to find song'
            })
        }
    },
    async getAllSongs (req, res) {
        try {
          const songs = await Song.findAll({ limit: 10 })
          res.send(songs)
        } catch (err) {
            res.status(500).send({
                error: 'Error occurred while trying to find songs'
            })
        }
    }

}
