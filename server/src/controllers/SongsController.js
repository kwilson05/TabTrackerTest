 const { Song } = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op


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
    async saveSong (req, res) {

        try {

            const song = await Song.update(req.body, {
                where: {
                    id: req.params.songId
                }
            })
            res.send(req.body)
        } catch (error) {
            res.status(500).send({
                error: 'Error occurred while trying to update song'
            })
        }


    },

    async getAllSongs (req, res) {

        try {
            let songs = null
            const search = req.query.search

            if (search) {
                songs = await Song.findAll({
                    where: {
                        [Op.or]: ['title', 'artist', 'genre', 'album'].map(key => ({
                            [key]: {
                                [Op.like]: `%${search}%`
                            }
                        }))
                    }
                })
                console.log(songs)
            } else {
                songs = await Song.findAll({ limit: 10 })
            }

            res.send(songs)
        } catch (err) {
            res.status(500).send({
                error: 'Error occurred while trying to find songs'
            })
        }
    }

}
