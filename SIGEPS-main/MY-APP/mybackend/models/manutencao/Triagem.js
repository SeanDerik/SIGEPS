const { DataTypes } = require("sequelize");
const connection = require("../database");

const Triagem = connection.define(
    "Triagem", // Capitalized for model naming convention
    {
        codigoTriagem: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomeTriagem: {
            type: DataTypes.STRING,
            allowNull: false
        },
        emailTriagem: {
            type: DataTypes.STRING
        },
        telefoneTriagem: {
            type: DataTypes.STRING
        }
    },
    {
        tableName: 'triagem', // Ensures proper table mapping in lowercase
        timestamps: false
    }
);

// Optional: Sync method can be defined in a separate file or handled elsewhere
// Triagem.sync({ force: false });

module.exports = Triagem;
