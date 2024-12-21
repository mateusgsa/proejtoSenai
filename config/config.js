// IMPORTANDO O MÓDULO "EXPRESS", FRAMEWORK QUE CRIA SERVIDORES WEB COM NODE.JS
const express = require("express");

// CRIA UMA INSTÂNCIA DO EXPRESS PARA CONFIGURAR E RODA O SERVIDOR
const app = express();

// IMPORTANDO O MÓDULOS "SEQUELIZE" - PARA ASSIM TRABALHAR COM BANCO DE DADOS RELACIONAL OU OBJETOS 
// (ORM - OBJECT - RELATIONAL MAPPING -PODE SER TRADUZIDO COMO MAPEAMENTO DE OBJETO RELACIONAL) 
const Sequelize = require("sequelize");

// INSTÂNCIA DO SEQUELIZE, COM INFORMAÇÕES NCESSÁRIA PARA CONECTAR O BANCO DE DADOS.
const sequelize = new Sequelize(
    'lanattoacaiteria', // NOME DO BANCO DE DADOS
    'mateusgsa_SQLLogin_1', // USUÁRIO
    'ygaan9gbm4', // SENHA
    {
        // MOSTRANDO O BANCO DE DADOS QUE VAI SER USADO
        dialect: 'mssql', // TIPO DO BANCO DE DADOS - MICROSOFT MYSQL SERVER 
        dialectModule: require('tedious'), // MODULO TEDIOUS COM DRIVER DO SQL SERVER 
        host: 'lanattoacaiteria.mssql.somee.com', // HOST DO BANCO DE DADOS
        port: 1433 // PORTA PADRÃO DO SQL
    });

/* SEMPRE UTLIZAR FUNÇÕES ASSINCRONAS QUANDO NECESSITAR DE CONEXÃO COM O BANCO DE DADOS ENTRDA/SAIDA
*/
const connectToDatabase = async () => {
    try {
        await sequelize.authenticate(); //FAZ AUTENTICAÇÃO DO BANCO DE DADOS COM SEQUELIZE
        console.log(`Conexão com o banco de dados realizada com sucesso.`);
    } catch (error) {
        console.log(`Erro ao conectar com o banco de dados: ${error}`); // EXIBE CASO TENHA FALHA DE CONEXÃO
    }
};

// EXPORTANDO O OBJETO sequelize E A FUNÇÃO connectToDatabase PARA SER USADO EM OUTRAS PARTES DO PROJETO
module.exports = { sequelize, connectToDatabase };