module.exports = function(sequelize, DataTypes) {
  var Allegry = sequelize.define("allegry", {
    allegryDesc: DataTypes.STRING,
    allegryApiCode: DataTypes.STRING
  });

  return Allegry;
};
