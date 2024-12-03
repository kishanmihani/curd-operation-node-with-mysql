const express = require('express')
const router = express.Router();
const todoController = require('../controllers/todoController');

// Routes
try{
router.get('/', todoController.getAllTodos);
}catch(err){console.log(err)}
router.get('/:id', todoController.getTodoById);
router.post('/', todoController.createTodo);
router.put('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;