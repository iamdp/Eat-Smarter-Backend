module.exports = function(sequelize, DataTypes) {
  var Allergy = sequelize.define("allergy", {
    allegryDesc: DataTypes.STRING,
    allegryApiCode: DataTypes.STRING
  });

  return Allergy;
};
