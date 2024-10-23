const { DataTypes } = require("sequelize");
const connection = require("../database");

const TipoSistema = connection.define(
    "TipoSistema", // Capitalized for model naming convention
    {
        codigoTipoSistema: { // Changed to camelCase
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomeTipoSistema: { // Changed to camelCase
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'tipo_sistema', // Ensures proper table mapping in lowercase
        timestamps: false
    }
);

// Optional: Sync method can be defined in a separate file or handled elsewhere
// TipoSistema.sync({ force: false });

module.exports = TipoSistema;
