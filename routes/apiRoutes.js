var db = require("../models");
var yummly = require("../moc/yummly");

module.exports = function(app) {
  // Unnecessary EndPoint
  /*   
  app.get("/api/getMealPlan", (req, res) => {
    res.json({
      breakfast: req.body.breakfast,
      lunch: req.body.lunch,
      dinner: req.body.dinner
    });
  }); 
*/

  app.post("/api/createUser", (req, res) => {
    db.user
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        age: req.body.age,
        caloricGoal: req.body.caloricGoal
      })
      .then(function(dbUser) {
        res.json(dbUser);
      });
  });

  app.post("/api/saveDailyMealPlan", (req, res) => {
    db.dailyMealPlan
      .create({
        dayOfTheWeek: req.body.dayOfTheWeek,
        meal: req.body.meal,
        recipeId: req.body.recipeId
      })
      .then(function(dbUser) {
        res.json(dbUser);
      });
  });

  app.post("/api/associateAllergy", (req, res) => {
    db.allergy
      .create({
        userId: req.body.userId,
        allergyDesc: req.body.allergyDesc,
        allergyApiCode: req.body.allergyApiCode
      })
      .then(result => {
        res.json(result);
      });
  });

  app.post("/api/favourite/add", (req, res) => {
    db.favourite
      .create({
        userId: req.body.userId,
        recipeId: req.body.recipeId
      })
      .then(result => {
        res.json(result);
      });
  });

  app.delete("/api/favourite/destroy", (req, res) => {
    db.favourite
      .destroy({
        where: {
          recipeId: req.body.recipeId
        }
      })
      .then(function(dbFavourite) {
        res.json(dbFavourite);
      });
  });

  app.delete("/api/user/destroy", (req, res) => {
    db.user
      .destroy({
        where: {
          userId: req.body.userId
        }
      })
      .then(function(dbUser) {
        res.json(dbUser);
      });
  });

  // if the user doesn't type in a recipe
  app.get("/getRecipes", (req, res) => {
    yummly.getRecipes("", result => {
      res.json(JSON.parse(result).matches);
    });
  });

  // recipes by user search
  app.get("/api/getRecipes:recipe?", (req, res) => {
    yummly.getRecipes(
      {
        recipeId: req.params.recipe
      },
      result => {
        res.json(JSON.parse(result).matches);
      }
    );
  });

  // find out what the difference is between this getRecipes and the one above
  app.get("/api/getRecipes", (req, res) => {
    yummly.getRecipes(req.query.q, result => {
      res.json(JSON.parse(result));
    });
  });

  app.get("/api/getUser", (req, res) => {
    /* 
      res.body.userId
      db.user.findAll()
  
      EXAMPLE:
    */
    db.user.findAll({ include: [db.allergy] }).then(result => {
      res.json(result);
    });
  });
};
