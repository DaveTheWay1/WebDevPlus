var express = require('express');

var app = express();

// in order to let express know that we want ejs as our view engine/template engine
app.set('view engine', 'ejs');

// ? what if we wanted to open to send back an html page?
// * we can do that using the sendFileMethod
app.get('/index/page', function(req,res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact/page',function(req,res){
    res.sendFile(__dirname + '/contact.html')
});

// ? what if we wanted to conenct some dynamic content into these pages? 
// such as data from a database
// * Template Engines to the rescue
// we must install ejs : npm install ejs

// now w the ejs template.. we can use, not sendFile to open the profile.ejs
// * but render
// render allows us to render a view
// *  we dont need to pass the name of the file or path bc it knows to look into the views folder
// its default behavior. rather we just pass the name of the view
app.get('/profile/:name', function(req,res){
    // to pass in more data we can do like the below
    var data = {age: 24, job: 'software engineer', hobbies:['coding', 'studying', 'morning runs']};
    // then, to acces ^ we can pass it in like below
    res.render('profile', {person:req.params.name, data:data});
});
// displays on browser: Welcome to the profile of David
// Age: 24
// Job: software engineer

app.listen(5500);