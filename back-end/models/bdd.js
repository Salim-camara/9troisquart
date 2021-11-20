const Sequelize = require('sequelize');


module.exports = new Sequelize('devis', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});