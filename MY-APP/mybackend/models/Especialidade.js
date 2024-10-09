const { DataTypes } = require("sequelize");
const connection = require("../database");

const Especialidade = connection.define(
    "especialidade", // Capitalized for model naming convention
    {
        codigoEspecialidade: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomeEspecialidade: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'especialidade', // Ensures proper table mapping in lowercase
        timestamps: false
    }
);

// Optional: Sync method can be defined in a separate file or handled elsewhere
// Especialidade.sync({ force: false });

module.exports = Especialidade;
