// models/Tipo.js
const { DataTypes } = require('sequelize');
const connection = require('../database');

const Tipo = connection.define('tipo', {
    codigo_tipo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_tipo: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'tipo',
    timestamps: false
});

module.exports = Tipo;
