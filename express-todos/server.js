// ** repeatable pattern

// ** require dependencies (node modules - aka packages of code used to build our project)
const express = require('express');

// ** initialize an express application
const app = express();

// ** configure application settings
// ** configure template engine
// ** [coming soon] expose enviroment variables 
// ** [coming soon] connect to databased management system 

// ** mount middleware - there are special functions that get invoked for each http request
// ** they perform services on requests
// ** they can ready information on requests
// ** they can modify information on requsts - they can attach additional information

// ** mount router(middleware)
app.get('/', (req,res)=>{
    res.send('Hello World');
});

// ** tell the application to listen for a request on port 3000
app.listen(3000, () =>{
    console.log('Listening on port 3000');
});