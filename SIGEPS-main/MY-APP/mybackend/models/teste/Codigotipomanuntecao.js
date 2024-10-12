// models/CodigoTipoManutencao.js
const { DataTypes } = require('sequelize');
const connection = require('../database');

const CodigoTipoManutencao = connection.define('codigo_tipo_manutencao', {
    codigo_tipo_manutencao: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_tipo_manutencao: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'codigo_tipo_manutencao',
    timestamps: false
});

module.exports = CodigoTipoManutencao;
