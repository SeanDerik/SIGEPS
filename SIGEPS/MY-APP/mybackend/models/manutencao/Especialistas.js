const { DataTypes } = require("sequelize");
const connection = require("../database");

const Especialistas = connection.define(
    "Especialistas", // Capitalized for model naming convention
    {
        codigoEspecialista: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomeEspecialista: {
            type: DataTypes.STRING,
            allowNull: false
        },
        emailEspecialista: {
            type: DataTypes.STRING
        },
        telefoneEspecialista: {
            type: DataTypes.STRING
        }
    },
    {
        tableName: 'especialistas', // Ensures proper table mapping in lowercase
        timestamps: false
    }
);

// Optional: Sync method can be defined in a separate file or handled elsewhere
// Especialistas.sync({ force: false });

module.exports = Especialistas;
