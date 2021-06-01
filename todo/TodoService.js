const {pool} = require('../connect');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('example', 'dev', 'secret', {
    dialect: 'mysql',
    host: '127.0.0.1',
    port:'3307'
});
const Todo = require("../todo/model/TodoModel")(sequelize);
const Op = Sequelize.Op;

console.log(Todo);
exports.getTodoList = () => {
    Todo.findAll({})
    .then( results => {
        for (var item of results) {
            //console.log('id:', item.id, 'name:', item.name, 'done:', item.done);
        }
    })
    .catch( error => {
        console.error('Error :', error);
    }); 
    const aa = Todo.findAll({});
    return aa;
}

// exports.getDoneTodoList = (title, director, year) => {
//     try {
//         let results = await Movie.findAll({where: { done:{[Op.gt]: false}}});
//         for (var item of results) {
//             console.log('id:', item.id, 'name:', item.name, 'done:', item.done);
//         }
//         sequelize.close();
//     }
//     catch (error) {
//         console.log('Error : ', error);
//     }
// }

// exports.insertTodo = (movieId) => {
//     return {id: 1, title: 'movie1'}
// }

// exports.updateTodo = (movieId) => {
//     return {id: 1, title: 'movie1'}
// }