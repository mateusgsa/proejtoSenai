// IMPORTA A INSTÂNCIA DO SEQUELIZE COM CONEXÃO DO BANCO DE DADOS
const { sequelize } = require('../config/config');
// IMPORTA OS DADOS DISPONÍVEIS NO SEQUELIZE
const DataTypes = require('sequelize');

//DIFINE MODELO DA TABELA 
const produtosModel = sequelize.define('Produto', //NOME DO MODELO
    {
        // CHAVE PRIMÁRIA AUTOINCREMENTADA
        id_produto: {
            type: DataTypes.INTEGER, // TIPO DO DADO
            autoIncrement: true,
            primaryKey: true
        },
        nomeProduto: {
            type: DataTypes.STRING, // TIPO DO DADO
            allowNull: false // PARA NÃO PERMITIR VALOR NULO
        },
        descricaoProduto: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantidadeProduto: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        pesoProduto: {
            type: DataTypes.DECIMAL(10, 2), // TIPO DE DADO DECIMAL, PERMITINDO 2 CASAS DECIMAIS
            allowNull: false
        },
        precoProduto: {
            type: DataTypes.DECIMAL(10, 2),  // TIPO DE DADO DECIMAL, PERMITINDO 2 CASAS DECIMAIS
            allowNull: false
        },
        disponibilidadeProduto: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
    tableName: 'Produto', // NOME DA TABELA NO BANCO DE DADOS
    timestamps: false // DESATIVA A CRIAÇÃO AUTOMATICA DE COLUNAS
});

// EXPORTANDO MODELO PRODUTOS
module.exports = { produtosModel };