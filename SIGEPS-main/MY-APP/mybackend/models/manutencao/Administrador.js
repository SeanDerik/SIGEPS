// models/Administrador.js
const { DataTypes } = require('sequelize');
const connection = require('../../database'); // Ensure this is pointing to the correct database file

const Administrador = connection.define('administrador', {
    codigoAdm: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nomeAdm: {
        type: DataTypes.STRING,
        allowNull: false
    },
    emailAdm: {
        type: DataTypes.STRING
    },
    telefoneAdm: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'administrador', // Make sure this matches your database table name
    timestamps: false // If you don't want createdAt and updatedAt fields
});

module.exports = Administrador;
