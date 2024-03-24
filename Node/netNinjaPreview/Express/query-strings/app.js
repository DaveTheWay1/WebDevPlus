var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req,res){
    res.render('index');
});

// app.get('/contact', function(req,res){
//     // console.log(req.query);
//     // output:{ dept: 'marketing', person: 'joe' }
//     res.render('contact');
// });

app.get('/contact', function(req,res){
    // console.log(req.query);
    // output:{ dept: 'marketing', person: 'joe' }
    res.render('contact', {qs: req.query});
});
// we pass in any data that we pass into the query string
// through and to the contact view

app.get('/profile/:name', function(req,res){
    var data = {age: 29, job:'ninja', hobbies: ['coding', 'studying', 'running']};
    res.render('profile', {person:req.params.name, data:data});
});

app.listen(3000);