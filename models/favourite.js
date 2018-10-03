module.exports = function (sequelize, DataTypes) {
    var favourite = sequelize.define("favourite", {
        favouriteId: DataTypes.STRING,
        recipeID: DataTypes.STRING
    });

    return favourite;
};
