var express = require('express');
var toDoController = require('./controllers/toDoController');

var app = express();

// set up templates engine
app.set('view engine', 'ejs');

//static files
// app.use('/assets', express.static('./public'));
app.use(express.static('./public'));
// taking aways the /assets makes it so that it is not route specific
// now if the user were to run localhost:3000/assets/styles.css then it 
// will run the middleware of on line 10 and look within the public folder for the styles.css

// fire controllers
toDoController(app);
// it is fired here as we have, line 2 must be fired hence ^. 
// we are firing the function stored in toDoController as 
// controllers/toDoController contains module.exports = function(app){};
// and we pass in app as the said file/function has a parameter for it and so that our express connects to it
// we can now set up routes within the file like app.get for example

//listen to port
app.listen(3000);
console.log('You are listening to port 3000');