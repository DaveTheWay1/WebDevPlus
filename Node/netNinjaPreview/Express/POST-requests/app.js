var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended:false });
                        // middleware
                        // used to pass our post data
    // as it is stored in our urlencoded
    // we just use it now in our post handler

app.set('view engine', 'ejs');

app.get('/', function(req,res){
    res.render('index');
});

app.post('/contact', urlencodedParser, function(req,res){
    console.log(req.body);
    res.render('contact-success', {data: req.body});
});
// on the form in our contact.ejs
// when submitted, due to the action being /contact
// it will comeback to like 17, take that submitted code and pass it
// through the urlencodedParser and can then be access through req.body
// after a succesful example submission:
// output:
// [Object: null prototype] {
//     who: ' David',
//     department: ' CS',
//     email: 'test@gmail.com'
// }
// we then are now also having that go to render contact-success ejs
// and pass through the info storing it within the key: data

// the render will display: 
// Thanks for getting in touch!
// You contacted David in the CS department.
// We will reply to you at test@gmail.com.

app.get('/contact', function(req,res){
    res.render('contact', {qs: req.query});
});

app.get('/profile/:name', function(req,res){
    var data = {age: 29, job:'ninja', hobbies: ['coding', 'studying', 'running']};
    res.render('profile', {person:req.params.name, data:data});
});

app.listen(3000);