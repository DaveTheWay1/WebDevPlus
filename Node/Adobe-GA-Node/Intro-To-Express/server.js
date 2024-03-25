// load express // require modules
const express = require('express');
const path = require('path');
// though is it a core node module path must still be required
// core node modules though DO NOT need to be installed
const todoDB = require('./data/todo-db');

// Create our express app
const app = express();

// configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Define a "root" route directly on app
// we'll use best practice routing anonther time
// Mount routes
app.get('/', function(req,res){
    // res.send('<h1>Hello Express</h1>');
    // this essentially is saying that the response shall be a send(display) Hello World /// we updated it to Express
    // when the user makes the request of opeining our localhost to our listener
    //... localhost:3000/
    res.redirect('/home');
});

// app.get('/home', function(req,res){
//     res.send('<h1>Home Page</h1>');
// })
// * now that we have views we can refactor the above

app.get('/home', function(req,res){
    res.render('home');
    //we dont need to /views/home bc render already knows to look for a views
})

app.get('/todo', function(req,res){
    res.render('todos/index', {
        todos: todoDB.getAll()
    })
})

// Tell the app to list on port 3000
// for the HTTp requests from clients
app.listen(3000, function(){
    console.log('Listening on port 3000');
});

// Run the app:

// node server

// * Using DevTools, we will find that despite just sending back the text of
// <h1>Hello World!</h1>,
// the browser “built” a minimal HTML document to display it in.
// * Using send() is a general purpose way to respond to the request, however, it’s kind of like using console.log()