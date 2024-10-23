// models/Sistemas.js
const { DataTypes } = require('sequelize');
const connection = require('../database');

const Sistemas = connection.define('sistemas', {
    Codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Codigo_Do_Tipo: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'sistemas',
    timestamps: false
});

module.exports = Sistemas;
