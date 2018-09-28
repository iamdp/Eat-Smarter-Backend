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

  app.get("/api/associateAllegry", (req, res) => {
    db.allegry
      .create({
        userId: "1",
        allegryDesc: "Peanuts"
      })
      .then(dbAllegry => {
        res.json(dbAllegry);
      });
  });

  app.post("/api/favourite/add", (req, res) => {
    /*
      req.body.userId
      req.body.recipeId
      db.favourite.create()
    */
  });

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
  });

  app.get("/getRecipes", (req, res) => {
    yummly.getRecipes("Cheese Bagel", result => {
      res.json(JSON.parse(result).matches);
    });
  });

  app.get("/api/getUser", (req, res) => {
    /* 
      res.body.userId
      db.user.findAll()

      EXAMPLE:
      db.user.findAll({ include: [db.allegry] }).then(dbUser => {
      res.json(dbUser);
    }); */
  });
};
