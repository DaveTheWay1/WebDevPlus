const express = require('express');
const path = require('path');

const petsDB = require('./data/pets-db');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res){
    res.render('home');
})

app.get('/pets', function(req, res){
    res.render('./pets/index', {
        // pets:petsDB.getAll()
        // either the top or bottom would've worked but the top only wouldve worked 
        // if in index.ejs the object were returned
        pets:petsDB
    });
})




app.listen(3000, function(){
    console.log('You are now listening on port 3000');
})