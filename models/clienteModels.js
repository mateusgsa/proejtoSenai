const {sequelize} = require('../config/config'); //VARIAVEL DE CONEXÃO DO BANCO DE DADOS
const DataTypes = require('sequelize');

//DEFINE OS DADOS
const teamModelCliente = sequelize.define('Cliente', {
    id_cliente:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nomeCliente: {
        type: DataTypes.STRING,
        allowNull: false
    },
    enderecoCliente: {
        type: DataTypes.STRING,
        allowNull: true
    },
    cpfCliente:{
        type: DataTypes.STRING,
        allowNull: true
    },
    telefoneCliente:{
        type: DataTypes.STRING,
        allowNull: true
    },
    emailCliente:{
        type: DataTypes.STRING,
        allowNull: true
    },
    senhaCliente:{
        type: DataTypes.STRING,
        allowNull: true
    }
},
{
    tableName: 'Cliente', 
    timestamps: false
//  o timestamps quer dizer se o codigo pode criar colunas novas
//  no banco, tipo se colocou
//  o nome da coluna errada ai em cima ele cria uma nova com o nome que você colocou
}); 

module.exports = {teamModelCliente};