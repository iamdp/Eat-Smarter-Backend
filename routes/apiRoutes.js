var db = require("../models");
var yummly = require("../moc/yummly");

module.exports = function(app) {
  app.get("/api/getMealPlan", (req, res) => {
    res.json({
      breakfast: "Green Eggs & Ham",
      lunch: "Supreme Burger",
      dinner: "Just Alfredo"
    });
  });

  app.get("/api/createUser", (req, res) => {
    db.user
      .create({
        firstName: "David",
        lastName: "Pham",
        age: 33,
        caloricGoal: 2200
      })
      .then(function(dbUser) {
        res.json(dbUser);
      });
  });

  app.get("/api/associateAllergy", (req, res) => {
    db.allergy
      .create({
        userId: "1",
        allergyDesc: "Peanuts",
        allergyApiCode: "abc"
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
    db.favorite
      .create({
        userId: req.body.userId,
        recipeId: req.body.recipeId
      })
      .then(result => {
        res.json(result);
      });
  });

  // Saw some previous examples in our code where we used .delete(), so I need to confirm the destroy and delete usages
  app.delete("/api/favourite/destory", (req, res) => {
    /*
      req.body.favouriteId
      db.favourite.destory()
    */
  });

  app.delete("/api/user/destory", (req, res) => {
    /* 
      req.body.userId
      db.user.destory()
    */
    db.favorite
      .destroy({
        userId: req.body.userId
      })
      .then(result => {
        res.json(result);
      });
  });

  app.get("/getRecipes", (req, res) => {
    yummly.getRecipes("Cheese Bagel", result => {
      res.json(JSON.parse(result).matches);
    });
  });

  app.get("/api/getRecipe", (req, res) => {
    /* 
      req.body.recipeId 
    */
    yummly.getRecipe(
      {
        recipeId: req.body.recipeId
      },
      result => {
        res.json(JSON.parse(result).matches);
      }
    );
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
