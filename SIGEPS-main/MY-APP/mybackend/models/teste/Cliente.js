// models/Cliente.js
const { DataTypes } = require('sequelize');
const connection = require('../database');

const Cliente = connection.define('cliente', {
    codigo_cliente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_cliente: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone_cliente: {
        type: DataTypes.STRING
    },
    genero_cliente: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'cliente',
    timestamps: false
});

module.exports = Cliente;
