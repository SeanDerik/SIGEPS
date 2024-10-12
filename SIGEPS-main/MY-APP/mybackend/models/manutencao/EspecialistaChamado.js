const { DataTypes } = require("sequelize");
const connection = require("../database");
const Especialistas = require("./Especialistas");
const Chamados = require("./Chamados");

const EspecialistaChamado = connection.define(
    "EspecialistaChamado", // Capitalized for model naming convention
    {
        codigoEspecialista: {
            type: DataTypes.INTEGER,
            references: {
                model: Especialistas,
                key: 'codigoEspecialista'
            },
            primaryKey: true
        },
        numeroChamado: {
            type: DataTypes.INTEGER,
            references: {
                model: Chamados,
                key: 'numeroChamado'
            },
            primaryKey: true
        }
    },
    {
        tableName: 'especialista_chamado', // Ensures proper table mapping in lowercase
        timestamps: false
    }
);

// Optional: Sync method can be defined in a separate file or handled elsewhere
// EspecialistaChamado.sync({ force: false });

module.exports = EspecialistaChamado;
