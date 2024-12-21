// IMPORTA A INSTÂNCIA DO SEQUELIZE COM CONEXÃO DO BANCO DE DADOS
const { sequelize } = require('../config/config');
// IMPORTA OS DADOS DISPONÍVEIS NO SEQUELIZE
const DataTypes = require('sequelize');

//DIFINE MODELO DA TABELA 
const funcionarioModel = sequelize.define('Funcionario', // NOME DO MODELO
    {
        // CHAVE PRIMÁRIA AUTOINCREMENTADA
        id_funcionario: {
            type: DataTypes.INTEGER, // TIPO DO DADO
            autoIncrement: true,
            primaryKey: true
        },
        nomeFuncionario: {
            type: DataTypes.STRING, // TIPO DO DADO
            allowNull: false // PARA NÃO PERMITIR VALOR NULO
        },
        enderecoFuncionario: {
            type: DataTypes.STRING,
            allowNull: true
        },
        cpfFuncionario: {
            type: DataTypes.STRING,
            allowNull: true
        },
        telefoneFuncionario: {
            type: DataTypes.STRING,
            allowNull: true
        },
        emailFuncionario: {
            type: DataTypes.STRING,
            allowNull: true
        },
        cargoFuncionario: {
            type: DataTypes.STRING,
            allowNull: true
        },
        salarioFuncionario: {
            type: DataTypes.DECIMAL(10, 2), // TIPO DE DADOS DECIMAL, ESPECIFICANDO O NUMERO DE CASAS APÓS A VIRGULA
            allowNull: true
        },
        senhaFuncionario: {
            type: DataTypes.STRING,
            allowNull: true
        },
        permissaoFuncionario: {
            type: DataTypes.BOOLEAN, // TIPO DE DADOS BOLLEANO
            allowNull: true
        }

    },
    {
        tableName: 'Funcionario', // NOME DA TABELA NO BANCO DE DADOS
        timestamps: false // DESATIVA A CRIAÇÃO AUTOMATICA DE COLUNAS
    });

// EXPORTA O MODELO FUNCIONÁRIO
module.exports = { funcionarioModel };