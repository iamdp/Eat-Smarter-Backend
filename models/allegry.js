module.exports = function(sequelize, DataTypes) {
  var Allegry = sequelize.define("allegry", {
    allegryDesc: DataTypes.STRING
  });

  return Allegry;
};
