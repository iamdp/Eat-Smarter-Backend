require("dotenv").config();
var request = require("request");

var yummlyAPI = "http://api.yummly.com/v1/api/recipes";

var yummly = {
  getRecipes: function(query, cb) {
    var options = {
      url: yummlyAPI,
      qs: {
        q: query
      },
      headers: {
        "X-Yummly-App-ID": process.env.YUMMLY_ID,
        "X-Yummly-App-Key": process.env.YUMMLY_KEY
      }
    };

    request.get(options, (error, response, body) => {
      cb(body);
    });
  }
};

module.exports = yummly;
