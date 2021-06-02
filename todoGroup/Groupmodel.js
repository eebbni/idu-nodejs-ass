const Sequelize = require('sequelize');

module.exports =(sequelize) => {
    return sequelize.define('Group', {
        title: Sequelize.STRING(100),
    }, { tablename:"groups",timestamps: false });
    };