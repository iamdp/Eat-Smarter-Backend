module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.TEXT,
    age: DataTypes.INTEGER,
    caloricGoal: DataTypes.INTEGER
  });

  User.associate = models => {
    User.hasMany(models.allergy, {
      onDelete: "cascade"
    });
    User.hasMany(models.dailyMealPlan, {
      onDelete: "cascade"
    });
  };

  return User;
};
