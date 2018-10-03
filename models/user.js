module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    email: { type:DataTypes.STRING, allowNull: false, validate: { isEmail: true }},
    password:{type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1]
    }},
    age: {type:DataTypes.INTEGER,allowNull:false},
    caloricGoal: {type:DataTypes.INTEGER, allowNull:false}
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
