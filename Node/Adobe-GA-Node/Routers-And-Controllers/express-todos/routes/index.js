var express = require('express');
var router = express.Router();
// * line one and two are always required on routes


// we did not require any other custom module to our index bc that one did not 
// require more a custom module with logic for our index. rather, we simply 
// simply just rendered the page there and passed in the data we did want
// displayed being just a title
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express To-Do' });
  // the line above pass the object of key title and value express to-do
});

module.exports = router;
// we then export for any file that wish access
// * but we send it over to the server...
// * from routes to server.
