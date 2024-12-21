// IMPORTA A INSTÂNCIA DO SEQUELIZE COM CONEXÃO DO BANCO DE DADOS
const { sequelize } = require('../config/config');
// IMPORTA OS DADOS DISPONÍVEIS NO SEQUELIZE
const DataTypes = require('sequelize');

//DIFINE MODELO DA TABELA 
const clienteModel = sequelize.define('Cliente', //NOME DO MODELO
    {
        // CHAVE PRIMÁRIA AUTOINCREMENTADA
        id_cliente: {
            type: DataTypes.INTEGER, // TIPO DO DADO
            autoIncrement: true, 
            primaryKey: true
        },
        nomeCliente: {
            type: DataTypes.STRING, // TIPO DO DADO
            allowNull: false // PARA NÃO PERMITIR VALOR NULO
        },
        enderecoCliente: {
            type: DataTypes.STRING,
            allowNull: true
        },
        cpfCliente: {
            type: DataTypes.STRING,
            allowNull: true
        },
        telefoneCliente: {
            type: DataTypes.STRING,
            allowNull: true
        },
        emailCliente: {
            type: DataTypes.STRING,
            allowNull: true
        },
        senhaCliente: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        tableName: 'Cliente', // NOME DA TABELA NO BANCO DE DADOS
        timestamps: false // DESATIVA A CRIAÇÃO AUTOMATICA DE COLUNAS
    });

// EXPORTA O MODELO CLIENTE
module.exports = { clienteModel };