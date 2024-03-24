var express = require('express');
var app = express();

app.set('view engine', 'ejs');

// app.use('/assets', function(req,res, next){
//     console.log(req.url)
//     // output: /
//     // displays:Cannot GET /assets
//     next();
// });
// the above is middleware but so is the below

app.use('/assets', express.static('assets'))
// now if we do localhost:3000/assets/static.css
// displays what is on the static.css
// line 6-11 is no longer necessary, specifically the next() as well
// the express.static('assets') is the middleware
// the ('assets') did not have to be the name of assets
// it coudlve been named anything there as long as it matches the folder name
// so if the folder was named stuff for ex.. it couldve been 
// /assets/stuff/static.css

app.get('/', function(req,res){
    res.render('index');
});

app.get('/contact', function(req,res){
    res.render('contact');
});

app.get('/profile/:name', function(req,res){
    var data = {age: 29, job:'ninja', hobbies: ['coding', 'studying', 'running']};
    res.render('profile', {person:req.params.name, data:data});
});

app.listen(3000);