// models/StatusRelato.js
const { DataTypes } = require('sequelize');
const connection = require('../database');

const StatusRelato = connection.define('status_relato', {
    codigo_status_relato: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_status_relato: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'status_relato',
    timestamps: false
});

module.exports = StatusRelato;
