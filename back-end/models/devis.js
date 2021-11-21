// const { DATE } = require('sequelize');
const { Sequelize, DataTypes } = require('sequelize');
const db = require('./bdd');

const Devis = db.define('devis', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,  
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    features: {
        type: Sequelize.JSON,
        allowNull: false
    }
});


module.exports = Devis; 