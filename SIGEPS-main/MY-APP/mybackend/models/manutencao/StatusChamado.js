const { DataTypes } = require("sequelize");
const connection = require("../database");

const StatusChamado = connection.define(
    "StatusChamado", // Capitalized for model naming convention
    {
        codigoStatusChamado: { // Changed to camelCase
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomeStatusChamado: { // Changed to camelCase
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'status_chamado', // Ensures proper table mapping in lowercase
        timestamps: false
    }
);

// Optional: Sync method can be defined in a separate file or handled elsewhere
// StatusChamado.sync({ force: false });

module.exports = StatusChamado;
