var express = require('express');
var router = express.Router();
// * line 1 and 2 are always required on route files

// we require our controllers to do bc our controllers has specific functionality
// for our todos. 
var todosCtrl = require('../controllers/todos');
  // All actual paths start with "/todos"

// GET /todos
// we connect each route to the related functionality from our controllers todos

// for our index function to show all
// we set the route to / and pass object key index which is a function
// this route is used to get ALL
router.get('/', todosCtrl.index);

// unlike the getALL, this route /:id is used for a specific item
// so we use the function tied to getting a specific item
router.get('/:id', todosCtrl.show);

module.exports = router;
