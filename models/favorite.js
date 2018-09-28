module.exports = function(sequelize, DataTypes) {
  var Favorite = sequelize.define("favorite", {
    favoriteDesc: DataTypes.STRING,
    favoriteApiCode: DataTypes.STRING
  });

  return Favorite;
};
