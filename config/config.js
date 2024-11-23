const express = require("express");

const app = express();

const Sequelize = require("sequelize");

const sequelize = new Sequelize('acaiteria', 'sa', 'UserAdm123', {
    dialect: 'mssql',
    dialectModule: require('tedious'), // como ele deve acessar o SQL SERVER
    houst:'localhost', // em qual computador esta hospedado o banco de dados
    port: 1433  // em qual porta esta o banco de dados
});

//sempre ultilizar funçoes assincronas quando nessecitar de conexão com o banco de dados
const connectToDataBase = async () =>{
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados realizada com sucesso');
    } catch (error) {
        console.log(`ERRO. Conexão com o banco de dados nao funcionou: ${error}`);
    }
};

module.exports = {sequelize, connectToDataBase}