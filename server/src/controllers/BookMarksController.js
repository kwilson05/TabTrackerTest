const { BookMark, Song } = require('../models')

const Sequelize = require('sequelize')
const Op = Sequelize.Op
const _ = require('lodash')


module.exports = {
    async getAllBookMarks (req, res) {

        try {

            const userId = req.user.id

            const {songId} = req.query


            let where = {
                UserId: userId
            }

            if (songId) {
                where.SongId = songId
            }

            const bookmarks = await BookMark.findAll({
                    where: where,
                    include: [{
                        model: Song
                    }]
                }).map(bookmark => bookmark.toJSON())
                .map(bookmark => _.extend({
                    bookmarkId: bookmark.id
                }, bookmark.Song))




            res.send(bookmarks)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'Error occurred while trying to find a Bookmark'
            })
        }
    },
    async addBookMark (req, res) {
        try {

            const bookmarkParams = req.body

            const userId = req.user.id


            const bookmark = await BookMark.findOne({
                where: {
                    SongId: bookmarkParams.songId,
                    UserId: userId
                }
            })

            if (bookmark) {
                return res.status(400).send({
                    error: 'you already have this set as a bookmark'
                })
            }

            const newBookMark = await BookMark.create({
                SongId: bookmarkParams.songId,
                UserId: userId
            })
            res.send(newBookMark)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'Error occurred while trying to create a Bookmark'
            })
        }
    },
    async removeBookMark (req, res) {

        try {

            const userId = req.user.id
            const { bookmarkId } = req.params

            const bookmark = await BookMark.findOne({
                where: {
                    id: bookmarkId,
                    UserId: userId
                }
            })

            if(!bookmark)
            {
                return res.status(403).send(
                {
                   error:'you do not have access to this bookmark'
                })
            }


            await bookmark.destroy()

            res.send(bookmark)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'Error occurred while trying to remove a Bookmark'
            })
        }
    }
}
