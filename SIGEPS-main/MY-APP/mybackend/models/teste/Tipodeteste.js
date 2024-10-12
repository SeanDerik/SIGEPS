// models/TipoDeTeste.js
const { DataTypes } = require('sequelize');
const connection = require('../database');

const TipoDeTeste = connection.define('tipo_de_teste', {
    codigo_tipo_teste: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_tipo_teste: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'tipo_de_teste',
    timestamps: false
});

module.exports = TipoDeTeste;
