var db = require("../models");
var yummly = require("../moc/yummly");

module.exports = function(app) {
  // Unnecessary EndPoint
  /*   
  app.get("/api/getMealPlan", (req, res) => {
    res.json({
      breakfast: "Green Eggs & Ham",
      lunch: "Supreme Burger",
      dinner: "Just Alfredo"
    });
  }); 
*/

  app.post("/api/createUser", (req, res) => {
    db.user
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
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

  app.get("/api/associateAllergy", (req, res) => {
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
    /*
      req.body.userId
      req.body.recipeId
      db.favourite.create()
    */
  });

  app.delete("/api/favourite/destroy", (req, res) => {
    /*
      req.body.favouriteId
      db.favourite.destroy()
    */
  });

  app.delete("/api/user/destroy", (req, res) => {
    /* 
      req.body.userId
      db.user.destroy()
    */
  });

  app.get("/api/getRecipes", (req, res) => {
    yummly.getRecipes(req.query.q, result => {
      res.json(JSON.parse(result));
    });
  });

  app.get("/api/getRecipe", (req, res) => {
    /* 
      req.body.recipeId 
    */
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
