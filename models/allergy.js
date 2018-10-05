module.exports = function(sequelize, DataTypes) {
  var Allergy = sequelize.define("allergy", {
    allergyDesc: DataTypes.STRING,
    allergyApiCode: DataTypes.STRING
  });

  return Allergy;
};
