// models/RelatosDeNaoConformidade.js
const { DataTypes } = require('sequelize');
const connection = require('../database');

const RelatosDeNaoConformidade = connection.define('relatos_de_nao_conformidade', {
    numero_relato: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo_relato: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao_relato: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    codigo_status_relato: {
        type: DataTypes.INTEGER,
        references: {
            model: 'status_relato',
            key: 'codigo_status_relato'
        }
    },
    codigo_cliente: {
        type: DataTypes.INTEGER,
        references: {
            model: 'cliente',
            key: 'codigo_cliente'
        }
    },
    codigo_sistema: {
        type: DataTypes.INTEGER,
        references: {
            model: 'sistemas',
            key: 'Codigo'
        }
    },
    data_abertura_relato: {
        type: DataTypes.DATE
    },
    data_encerramento_relato: {
        type: DataTypes.DATE
    },
    codigo_triagem: {
        type: DataTypes.INTEGER
    },
    codigo_tipo_manutencao: {
        type: DataTypes.INTEGER
    },
    codigo_testador: {
        type: DataTypes.INTEGER,
        references: {
            model: 'testador',
            key: 'codigo_testador'
        }
    },
    codigo_tipo_teste: {
        type: DataTypes.INTEGER
    },
    codigo_item_teste: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'relatos_de_nao_conformidade',
    timestamps: false
});

module.exports = RelatosDeNaoConformidade;
