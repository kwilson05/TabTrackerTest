const { sequelize, Song, User, BookMark} = require('../models')

const Promise = require('bluebird')
const songs = require('./songs.json')
const users = require('./users.json')
const bookMark = require('./bookmark.json')


sequelize.sync({ force: true })
    .then(async function () {
        await Promise.all(
            users.map(user => { User.create(user) }))

        await Promise.all(
            songs.map(song => { Song.create(song) }))


        await Promise.all(
            songs.map(bookMark => { BookMark.create(bookMark) }))

    })
