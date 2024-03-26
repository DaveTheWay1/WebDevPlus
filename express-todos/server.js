// ** repeatable pattern

// ** require dependencies (node modules - aka packages of code used to build our project)
const express = require('express');

// ** initialize an express application
const app = express();

// ** configure application settings
app.set('view engine', 'ejs'); // sets gloabl view to ejs
// ** configure template engine
// ** [coming soon] expose enviroment variables 
// ** [coming soon] connect to databased management system 
// ** [temporary dev section]
const todosList = [
    {item:"Wash the dishes", complete: false}, 
    {item:"Clean our room", complete: false}, 
    {item: "Learn Express", complete: false}
];
// mock database ^

// ** mount middleware - there are special functions that get invoked for each http request
// ** they perform services on requests
// ** they can ready information on requests
// ** they can modify information on requsts - they can attach additional information

// ** mount router(middleware)
app.get('/', (req,res)=>{
    res.send('Hello World');
});

app.use(express.static('public'));

//      RESTful routing (representational state tansfer)
//      a convetion that we use to delevope hgihly descriptive url tasks
app.get('/todos', (req,res)=>{
    // res.send(todosList);
    res.render('todos', {todos: todosList});
});

// ** tell the application to listen for a request on port 3000
app.listen(3000, () =>{
    console.log('Listening on port 3000');
});

// setting the path is no longer necessary bc express has updated to not need it anymore