var express = require('express');
// to be able to use express we need to require it in our code
// we now have access to it as the express module is being grabbed
// and stored in the variable express. it returns a function

var app = express();
// we create this express app so that we can get the functionality that express
// comes made with which helps with things such as routing and setting a template method

app.get('/',function(req,res){
    res.send('this is the homepage')
});
// upon using localhost:3000/ on browser we will see 
// this is the homepage

app.get('/contact',function(req,res){
    res.send('this is the contact page')
});
// upon using localhost:3000/contact on browser we will see
// this is the homepage

app.listen(3000);
// we also need to listen to a port.

// * due to how express it being called and stored within app
// we get access to a variety of methods to help respond to requests

// * HTTP verbs/methods
// - Get - app.get('route',fn)
// - Post - app.post('route',fn)
// - Delete - app.delete('route',fn)
// - Put - app.delete('route', fn)

// each lets the server know what kind of request it is.
// then the server must look at what type it is and then 
// address it accordingly