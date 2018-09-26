module.exports = function(sequelize, DataTypes) {
  var MealPlan = sequelize.define("mealPlan", {
    dayOfTheWeek: DataTypes.STRING
  });
  return MealPlan;
};
