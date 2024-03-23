var express = require('express');

var app = express();

app.get('/',function(req,res){
    res.send('this is the homepage')
});

app.get('/contact',function(req,res){
    res.send('this is the contact page')
});


// ? What if i wanted some kind of dynamic request?
// for exmaple wanting to open up a page with a specific id..

app.get('/profile/:id', function(req,res){
    res.send(`You requested to see a profile with the id of ${req.params.id}`);
});

// now when we run localhost:3000/profile/123 on browser we get:
// output: You requested to see a profile with the id of 123

// localhost:3000/profile/13
// output: You requested to see a profile with the id of 3

// http://localhost:3000/profile/david
// output: You requested to see a profile with the id of david

app.listen(3000);