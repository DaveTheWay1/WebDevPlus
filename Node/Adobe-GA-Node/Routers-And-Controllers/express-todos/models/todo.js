// * modles


// a fake database is created
const todos = [
    {id: 125223, todo: 'Feed Dogs', done: true},
    {id: 127904, todo: 'Learn Express', done: false},
    {id: 139608, todo: 'Buy Milk', done: false}
];
// we export up here because we always want it so that 
// we dont have to scroll all the way down.
// both fucntions get exported and ready for usage
module.exports = {
    getAll,
    getOne
};
// we create the function getAll and return todos..
// essentially returning the fake database, we're 
// returning all.. setting it up for a getAll()
function getAll() {
    return todos;
}

// we create a function called get one and passing
// it the parameter of id. we do this to getOne,
// a singular object item from the data base
function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    // The Array.prototype.find iterator method is
    // ideal for finding objects within an array
    return todos.find(todo => todo.id === id);
}