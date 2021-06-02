const Sequelize = require('sequelize');

module.exports =(sequelize) => {
    return sequelize.define('Todo', {
      title: Sequelize.STRING(100),
      status : Sequelize.STRING(100),
   }, { tablename:"todos",timestamps: false });
    };
