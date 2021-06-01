const express = require('express');
const TodoRouter = express.Router();
const {lookTodoList, lookDoneTodoList,addTodo,doneTodo} = require('../controller/TodoController');

//전체 할일 보기
TodoRouter.get('/TodoList', lookTodoList);

// //완료된 할일 보기
// TodoRouter.get('/TodoDoneList', lookDoneTodoList);

// //할일 추가 하기
// TodoRouter.post('/TodoAdd', addTodo);

// //할일 완료 체크
// TodoRouter.post('/TodoDone/:todoId', doneTodo);

module.exports = TodoRouter;