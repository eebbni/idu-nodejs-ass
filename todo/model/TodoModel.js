const {pool} = require('../../connect');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('example', 'dev', 'secret', {
    dialect: 'mysql',
    host: '127.0.0.1',
    port:'3307'
});
const Op = Sequelize.Op;

module.exports =(sequelize) => {
    return sequelize.define('Todo', {
      name: Sequelize.STRING(100),
      done:Sequelize.BOOLEAN
   }, { tablename:"todos",timestamps: false });
    };