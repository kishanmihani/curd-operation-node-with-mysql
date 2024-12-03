const db = require('../config/database');

exports.getAllTodos = function(callback) {
    db.query('SELECT * FROM employees', callback);
};

exports.getTodoById = function(id, callback) {
    db.query('SELECT * FROM employees WHERE id = ?', [id], callback);
};

exports.createTodo = function(newTodo, callback) {
    db.query('INSERT INTO employees SET ?', newTodo, callback);
};

exports.updateTodo = function(id, updatedTodo, callback) {
    db.query('UPDATE employees SET ? WHERE id = ?', [updatedTodo, id], callback);
};

exports.deleteTodo = function(id, callback) {
    db.query('DELETE FROM employees WHERE id = ?', [id], callback);
};