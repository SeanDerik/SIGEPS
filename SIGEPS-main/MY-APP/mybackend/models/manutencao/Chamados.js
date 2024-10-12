// models/Chamados.js
const { DataTypes } = require("sequelize");
const connection = require("../database");
const StatusChamado = require("./StatusChamado");
const Clientes = require("./Clientes");
const Triagem = require("./Triagem");
const Sistemas = require("./Sistemas");
const TipoManutencao = require("./TipoManutencao");

const Chamados = connection.define(
    "chamados", // Capitalized for model naming convention
    {
        numeroChamado: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tituloChamado: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descricaoChamado: {
            type: DataTypes.TEXT
        },
        codigoStatusChamado: { // Changed to camelCase
            type: DataTypes.INTEGER,
            references: {
                model: StatusChamado,
                key: 'codigoStatusChamado' // Ensure this matches the key in StatusChamado
            }
        },
        codigoCliente: {
            type: DataTypes.INTEGER,
            references: {
                model: Clientes,
                key: 'codigoCliente'
            }
        },
        codigoTriagem: {
            type: DataTypes.INTEGER,
            references: {
                model: Triagem,
                key: 'codigoTriagem'
            }
        },
        codigoSistema: {
            type: DataTypes.INTEGER,
            references: {
                model: Sistemas,
                key: 'codigoSistema'
            }
        },
        dataAbertura: {
            type: DataTypes.DATE
        },
        dataFechamento: {
            type: DataTypes.DATE
        },
        codigoTipoManutencao: { // Changed to camelCase
            type: DataTypes.INTEGER,
            references: {
                model: TipoManutencao,
                key: 'codigoTipoManutencao' // Ensure this matches the key in TipoManutencao
            }
        }
    },
    {
        tableName: 'chamados', // Ensure this matches your database table name
        timestamps: false
    }
);

// Optional: sync method can be defined in a separate file or handled elsewhere
// Chamados.sync({ force: false });

module.exports = Chamados;
