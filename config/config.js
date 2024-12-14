const express = require  ("express");

const app = express();

const Sequelize = require("sequelize");

const sequelize = new Sequelize('lanattoacaiteria', 'mateusgsa_SQLLogin_1', 'ygaan9gbm4', {
    // MOSTRANDO O BANCO DE DADOS QUE VAI SER USADO
    dialect: 'mssql', 
    dialectModule: require('tedious'),
    host: 'lanattoacaiteria.mssql.somee.com',
    port: 1433
});

//SEMPRE UTLIZAR FUNÇÕES ASSINCRONAS QUANDO NECESSITAR DE CONEXÃO COM O BANCO DE DADOS
const connectToDatabase = async () =>{
    try {
        await sequelize.authenticate();
        console.log(`Conexão com o banco de dados realizada com sucesso.`);
    } catch (error) {
        console.log(`Erro ao conectar com o banco de dados: ${error}`);       
    }
};

module.exports = {sequelize, connectToDatabase};