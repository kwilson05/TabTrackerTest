module.exports = (sequelize, DataTypes) => {

    const BookMark = sequelize.define('BookMark', {

    });

    BookMark.associate = function (models) {
        BookMark.belongsTo(models.User)
        BookMark.belongsTo(models.Song)
    }

    return BookMark
}
