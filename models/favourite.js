module.exports = function(sequelize, DataTypes) {
  var Favourite = sequelize.define("favourite", {
    userId:{type:DataTypes.INTEGER},
    recipeId: {type:DataTypes.STRING} 
  });

  return Favourite;
};