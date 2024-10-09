const { DataTypes } = require("sequelize");
const connection = require("../database");
const TipoSistema = require("./TipoSistema");

const Sistemas = connection.define(
    "Sistemas", // Capitalized for model naming convention
    {
        codigoSistema: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomeSistema: {
            type: DataTypes.STRING,
            allowNull: false
        },
        codigoTipoSistema: { // Changed to camelCase
            type: DataTypes.INTEGER,
            references: {
                model: TipoSistema,
                key: 'codigoTipoSistema' // Ensure this matches the key in TipoSistema
            }
        }
    },
    {
        tableName: 'sistemas', // Ensures proper table mapping in lowercase
        timestamps: false
    }
);

// Optional: Sync method can be defined in a separate file or handled elsewhere
// Sistemas.sync({ force: false });

module.exports = Sistemas;
