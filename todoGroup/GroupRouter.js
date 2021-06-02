const express = require('express');
const GroupRouter = express.Router();
const {GroupList,GroupAdd,prepareModel} = require('./GroupController');

//테이블준비
GroupRouter.get('/GroupTable', prepareModel);

//전체 그룹 보기
GroupRouter.get('/GroupList', GroupList);

// //그룹 내 할일 보기
// GroupRouter.get('/GroupTodoList', GroupTodoList);

//그룹 추가 하기
GroupRouter.post('/GroupAdd', GroupAdd);

module.exports = GroupRouter;