const express = require('express');
const TodoRouter = express.Router();
const {TodoList,TodoDoneList,TodoAdd,prepareModel,TodoDone} = require('./TodoController');

//테이블준비
TodoRouter.get('/TodoTable', prepareModel);

//전체 할일 보기
TodoRouter.get('/TodoList', TodoList);

//완료된 할일 보기
TodoRouter.get('/TodoDoneList', TodoDoneList);

//할일 추가 하기
TodoRouter.post('/TodoAdd', TodoAdd);

//할일 완료 체크
TodoRouter.post('/TodoDone', TodoDone);

module.exports = TodoRouter;