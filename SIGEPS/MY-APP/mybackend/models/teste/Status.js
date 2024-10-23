// models/Status.js
const { DataTypes } = require('sequelize');
const connection = require('../database');

const Status = connection.define('status', {
    codigo_status: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_status: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'status',
    timestamps: false
});

module.exports = Status;
