var express = require('express');
var router = express.Router();

var todosCtrl = require('../controllers/todos');
  // All actual paths start with "/todos"

// GET /todos
router.get('/', todosCtrl.index);

module.exports = router;
