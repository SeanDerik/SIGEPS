// models/Adm.js
const { DataTypes } = require('sequelize');
const connection = require('../database');

const Adm = connection.define('adm', {
    codigo_adm: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_adm: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'adm',
    timestamps: false
});

module.exports = Adm;
