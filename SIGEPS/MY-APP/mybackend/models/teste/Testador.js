// models/Testador.js
const { DataTypes } = require('sequelize');
const connection = require('../database');

const Testador = connection.define('testador', {
    codigo_testador: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_testador: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'testador',
    timestamps: false
});

module.exports = Testador;
