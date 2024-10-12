const { DataTypes } = require("sequelize");
const connection = require("../database");
const Sistemas = require("./Sistemas");

const Clientes = connection.define(
    "clientes", // Capitalized for model naming convention
    {
        codigoCliente: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomeCliente: {
            type: DataTypes.STRING,
            allowNull: false
        },
        emailCliente: {
            type: DataTypes.STRING
        },
        telefoneCliente: {
            type: DataTypes.STRING
        },
        codigoSistema: {
            type: DataTypes.INTEGER,
            references: {
                model: Sistemas,
                key: 'codigoSistema' // Ensure this matches the key in Sistemas
            }
        }
    },
    {
        tableName: 'clientes', // Ensures proper table mapping in lowercase
        timestamps: false
    }
);

// Optional: Sync method can be defined in a separate file or handled elsewhere
// Clientes.sync({ force: false });

module.exports = Clientes;
