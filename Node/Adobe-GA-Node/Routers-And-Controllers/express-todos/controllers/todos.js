// Convention is to name the model in uppercase and singular
const Todo = require('../models/todo');
// in order to create logic with the data, we need access to the data!
// hence, we require it into this file!!

module.exports = {
    index,
    show
};

// using the functions created within the models
// we create functionlity to include those functions 

// index function to run/pass through data 
function index(req, res) {
    res.render('todos/index', {
        // rendering the index found in the views todos
        todos: Todo.getAll()
        // storing the to do get all function in the object key todos 
        // we gained access to the get all function from our models
        // bc of how we required our models/todo
    });
}

function show(req, res) {
    res.render('todos/show', {
        // we render the show ejs file found in our views todos folder
        todo: Todo.getOne(req.params.id),
    });
}

// * on our render, VIEWS is not includes bc express and ejs already know to look for views 
// due to our app.set 'views' path.join. regardless even without the path express has upgraded to already look for it as views
// * we also do not inlcude .ejs to our show or index bc it was also set as our views engine