var db = require('../models');

module.exports = function(app) {
  // Get all examples
  app.get('/api/getMealPlan', function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      var mealPlan = {
        breakfast: 'cereal',
        lunch: 'cheese sandwhich',
        dinner: 'steak and eggs'
      };
      res.json(mealPlan);
    });
  });

  // Create a new example
  app.post('/api/example', function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete('/api/examples/:id', function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
