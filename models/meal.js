module.exports = function(sequelize, DataTypes) {
  var Meal = sequelize.define("meal", {
    mealName: DataTypes.STRING,
    mealImg: DataTypes.STRING
  });
  return Meal;
};
