var db = require("../models");

module.exports = function(app) {
  app.get("/api/getMealPlan", function(req, res) {
    res.json({
      breakfast: "Green Eggs & Ham",
      lunch: "Supreme Burger",
      dinner: "Just Alfredo"
    });
  });

  app.get("/api/createUser", function(req, res) {
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

  app.get("/api/getUser", (req, res) => {
    db.user.findAll({ include: [db.allegry] }).then(dbUser => {
      res.json(dbUser);
    });
  });
};
