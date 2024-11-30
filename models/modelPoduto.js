const {sequelize} = require('../config/config');  // variavel de conexão.
const DataTypes = require('sequelize'); // definir o tipo de dados(string,int,data,etc)

const produtosModel = sequelize.define('Produto', {
    id_produto: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nomeProduto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricaoProduto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantidadeProduto:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
    pesoProduto: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    precoProduto: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    disponibilidadeProduto: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    tableName: 'Produto',
    timestamps: false // Esse comandos serve para não criar uma coluna nessa tabela.
});

module.exports = {produtosModel};