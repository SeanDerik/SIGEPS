// models/PlanoDeTeste.js
const { DataTypes } = require('sequelize');
const connection = require('../database');

const PlanoDeTeste = connection.define('plano_de_teste', {
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
    tableName: 'plano_de_teste',
    timestamps: false
});

module.exports = PlanoDeTeste;
