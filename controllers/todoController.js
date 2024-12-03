const Todo = require('../models/todo');

exports.getAllTodos = function(req, res) {
    Todo.getAllTodos((err, todos) => {
        if (err) throw err;
        console.log(todos)
        res.json(todos);
    });
};

exports.getTodoById = function(req, res) {
    Todo.getTodoById(req.params.id, (err, todo) => {
        if (err) throw err;
        res.json(todo);
    });
};

exports.createTodo = function(req, res) {
    const newTodo = {
        id: req.body.id,
        Name: req.body.Name,
        Email: req.body.Email,
        Salary: req.body.Salary,
        Position: req.body.Position,
        HireDate:req.body.HireDate
    };

    Todo.createTodo(newTodo, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Todo created successfully' });
    });
};

exports.updateTodo = function(req, res) {
    const updatedTodo = {
        // id: req.body.id,
        Name: req.body.Name,
        Email: req.body.Email,
        Salary: req.body.Salary,
        Position: req.body.Position,
        HireDate:req.body.HireDate
    };

    Todo.updateTodo(req.params.id, updatedTodo, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Todo updated successfully' });
    });
};

exports.deleteTodo = function(req, res) {
    Todo.deleteTodo(req.params.id, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Todo deleted successfully' });
    });
};