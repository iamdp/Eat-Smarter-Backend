var db = require("../models");
var yummly = require("../yummly");

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

  app.get("/getRecipes", (req, res) => {
    yummly.getRecipes("Cheese Bagel", result => {
      res.json(JSON.parse(result).matches);
    });
  });

  app.get("/api/getUser", (req, res) => {
    db.user.findAll({ include: [db.allegry] }).then(dbUser => {
      res.json(dbUser);
    });
  });
};
