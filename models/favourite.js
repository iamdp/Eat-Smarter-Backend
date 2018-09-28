module.exports = function(sequelize, DataTypes) {
  var Favourite = sequelize.define("favourite", {
    favouriteDesc: DataTypes.STRING,
    favouriteApiCode: DataTypes.STRING
  });

  return Favourite;
};
