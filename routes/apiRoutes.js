var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/getMealPlan", function(req, res) {
    res.json({
      breakfast: "Green Eggs & Ham",
      lunch: "Supreme Burger",
      dinner: "Just Alfredo"
    });
    // db.Example.findAll({}).then(function(dbExamples) {});
  });
};
