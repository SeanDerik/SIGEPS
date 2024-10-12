// models/Especialidade.js
const { DataTypes } = require('sequelize');
const connection = require('../database');

const Especialidade = connection.define('especialidade', {
    codigo_especialidade: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_especialidade: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'especialidade',
    timestamps: false
});

module.exports = Especialidade;
