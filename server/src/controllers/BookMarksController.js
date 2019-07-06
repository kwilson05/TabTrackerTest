const { BookMark } = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op


module.exports = {
    async getAllBookMarks (req, res) {

        try {
            const songId = req.query.songId

            const bookmark = await BookMark.findOne({
                where: {
                    SongId: songId
                }
            })

            res.send(bookmark)
        } catch (err) {
            res.status(500).send({
                error: 'Error occurred while trying to find a Bookmark'
            })
        }
    }
}
