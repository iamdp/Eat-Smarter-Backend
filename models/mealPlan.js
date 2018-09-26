module.exports = function(sequelize, DataTypes) {
  var MealPlan = sequelize.define("mealPlan", {
    dayOfTheWeek: DataTypes.STRING
  });

  MealPlan.associate = models => {
    MealPlan.hasMany(models.meal);
  };

  return MealPlan;
};
