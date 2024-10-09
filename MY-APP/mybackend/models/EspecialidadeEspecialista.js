const { DataTypes } = require("sequelize");
const connection = require("../database");
const Especialidade = require("./Especialidade");
const Especialistas = require("./Especialistas");

const EspecialidadeEspecialista = connection.define(
    "EspecialidadeEspecialista", // Capitalized for model naming convention
    {
        codigoEspecialidade: {
            type: DataTypes.INTEGER,
            references: {
                model: Especialidade,
                key: 'codigoEspecialidade'
            },
            primaryKey: true
        },
        codigoEspecialista: {
            type: DataTypes.INTEGER,
            references: {
                model: Especialistas,
                key: 'codigoEspecialista'
            },
            primaryKey: true
        }
    },
    {
        tableName: 'EspecialidadeEspecialista', // Ensures proper table mapping in lowercase
        timestamps: false
    }
);

// Optional: Sync method can be defined in a separate file or handled elsewhere
// EspecialidadeEspecialista.sync({ force: false });

module.exports = EspecialidadeEspecialista;
