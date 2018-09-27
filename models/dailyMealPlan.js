module.exports = function(sequelize, DataTypes) {
  var DailyMealPlan = sequelize.define("dailyMealPlan", {
    dayOfTheWeek: DataTypes.STRING, // monday, tuesday, wednesday, thursday, friday, saturday, sunday
    meal: DataTypes.STRING, // breakfast, lunch, dinner
    recipeId: DataTypes.STRING // Yummly recipe-id
  });

  return DailyMealPlan;
};
