const express = require('express');
const {getTodoList} = require('../TodoService');

exports.lookTodoList = async (req, res) => {
    const data = await getTodoList();
    console.log(data);
    res.send({
        data
    });
}

// exports.lookDoneTodoList = async (req, res) => {
//     const title = req.body.title;
//     const director = req.body.director;
//     const year = parseInt(req.body.year);

//     // 입력 에러 처리
//     if ( !title || !director || !year ) {
//         res.sendStatus(400);
//         console.log("aa");
//         return;
//     }

//     const movieId = await insertMovie(title, director, year);
//     console.log('ret ;', movieId);

//     const data = await getMovie(movieId);

//     res.send({data});
// }

// exports.addTodo = async (req, res) => {
//     const title = req.body.title;
//     const director = req.body.director;
//     const year = parseInt(req.body.year);

//     // 입력 에러 처리
//     if ( !title || !director || !year ) {
//         res.sendStatus(400);
//         console.log("aa");
//         return;
//     }

//     const movieId = await insertMovie(title, director, year);
//     console.log('ret ;', movieId);

//     const data = await getMovie(movieId);

//     res.send({data});
// }

// exports.doneTodo = async (req, res) => {
//     const title = req.body.title;
//     const director = req.body.director;
//     const year = parseInt(req.body.year);

//     // 입력 에러 처리
//     if ( !title || !director || !year ) {
//         res.sendStatus(400);
//         console.log("aa");
//         return;
//     }

//     const movieId = await insertMovie(title, director, year);
//     console.log('ret ;', movieId);

//     const data = await getMovie(movieId);

//     res.send({data});
// }