var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req,res){
    res.render('index');
});
// to render(to be able to access the page on browser through the link) we just need the name of the file
// in this case it is index.

app.get('/contact', function(req,res){
    res.render('contact');
});
// to render(to be able to access the page on browser through the link) we just need the name of the file
// in this case it is contact

app.get('/profile/:name', function(req,res){
    var data = {age: 29, job:'ninja', hobbies: ['coding', 'studying', 'running']};
    res.render('profile', {person:req.params.name, data:data});
});

app.listen(3000);