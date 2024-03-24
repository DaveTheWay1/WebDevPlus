var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/profile/:name', function(req,res){
    var data = {age: 29, job:'ninja', hobbies: ['coding', 'studying', 'running']};
    res.render('profile', {person:req.params.name, data:data});
});

app.listen(3000);