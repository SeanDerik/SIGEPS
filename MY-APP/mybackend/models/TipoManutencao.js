const { DataTypes } = require("sequelize");
const connection = require("../database");

const TipoManutencao = connection.define(
    "TipoManutencao", // Capitalized for model naming convention
    {
        codigoTipoManutencao: { // Changed to camelCase
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomeTipoManutencao: { // Changed to camelCase
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'tipo_manutencao', // Ensures proper table mapping in lowercase
        timestamps: false
    }
);

// Optional: Sync method can be defined in a separate file or handled elsewhere
// TipoManutencao.sync({ force: false });

module.exports = TipoManutencao;
