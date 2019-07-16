const { BookMark, Song, Histories } = require('../models')

const Sequelize = require('sequelize')
const Op = Sequelize.Op
const _ = require('lodash')


module.exports = {
    async getAllSongHistory (req, res) {

        try {
            const { userId } = req.query



            let where = {
                UserId: userId
            }

            const allSongHistory = await Histories.findAll({
                    where: where,
                    include: [{
                        model: Song
                    }]
                }).map(history => history.toJSON())
                .map(history => _.extend({
                    historyId: history.id
                }, history.Song))


            console.log(allSongHistory)


            res.send(allSongHistory)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'Error occurred while trying to find a Song History'
            })
        }
    },
    async addSongHistory (req, res) {
        try {

            const { songId, userId } = req.body


            const history = await Histories.create({
                SongId: songId,
                UserId: userId
            })

            res.send(history)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'Error occurred while trying to add to song history'
            })
        }
    }
}
