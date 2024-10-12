// models/Triagem.js
const { DataTypes } = require('sequelize');
const connection = require('../database');

const Triagem = connection.define('triagem', {
    field: {
        type: DataTypes.STRING,
        allowNull: false
    },
    method: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'triagem',
    timestamps: false
});

module.exports = Triagem;
