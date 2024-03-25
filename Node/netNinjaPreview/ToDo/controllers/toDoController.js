var bodyParser = require('body-parser');

var data = [{item: 'get milk'}, {item:'walk dog'}, {item:'kick some coding ass'}];
var urlencodeParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
                        // comes from app.js specifically line 3; var app = express();

    app.get('/todo', function(req,res){
        res.render('ToDo', {todos:data});
    });

    app.post('/todo', urlencodeParser ,function(req,res){
        data.push(req.body);
        res.json(data);// which gets passed to the todo-list.js and passed into the success function which then reloads toDo.ejs which then re runs that for loop that dispalys them all
    });

    app.delete('/todo/:item', function(req,res){
        data = data.filter(function(todo){
            return todo.item.replace(/ /g, '-') !== req.params.item; // returns either true or false, if it is true then it remains in the array if false it go out of the array
        })          // todo.item refers to the item we are currently at in the todo list. replace / / refers to spaces, we replace them with hyphens.. if that is not equal req.params.item .. whcih is the :item in the url path
    res.json(data);
    });
};