// models/TipoSistema.js
const { DataTypes } = require('sequelize');
const connection = require('../database');

const TipoSistema = connection.define('tipo_sistema', {
    codigo_tipo_sistema: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_tipo_sistema: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'tipo_sistema',
    timestamps: false
});

module.exports = TipoSistema;
