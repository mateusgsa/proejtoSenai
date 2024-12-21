// IMPORTANDO O MÓDULO "EXPRESS", FRAMEWORK QUE CRIA SERVIDORES WEB COM NODE.JS
const express = require("express");
// CRIA UMA INSTÂNCIA DO EXPRESS PARA CONFIGURAR E RODA O SERVIDOR
const app = express();
// PORTA DEFINIDA DO SERVIDOR
const port = 3000;
const cors = require('cors');

// IMPORTANDO O MÓDULO PATH, PARA FACILITAR COM OS CAMINHOS DE ARQUIVOS DE DIRETÓRIOS
const path = require("path"); 

// ROTAS DOS MÓDULOS DE CADA TABELA, PARA ACESSAR AS FUNÇÕES
const clienteRouters = require("./routers/clienteRouters");
const funcionarioRouters = require("./routers/funcionarioRouters");
const produtoRouters = require("./routers/produtoRouters");
const pedidoRouters = require("./routers/pedidoRouters");

// IMPORTANDO FUNÇÃO PARA CONECTAR AO BANCO DE DADOS
const {connectToDatabase} = require("./config/config");
connectToDatabase();

// DEFININDO O MOTOR DE VISULIAÇÃO (VIEW ENGINE) COMO 'EJS',  FERRAMENTA DE TEMPLATE
app.set('view engine', 'ejs');

// UTILIZANDO O MIDDLEWARE PARA INTERPRETAR O CORPO DAS REQUISIÇÕES HTTP EM FORMATO JSON
app.use(express.json());

//DEFINIDO MIDDLEAWARE
app.use(express.static(path.join(__dirname,"/views")));

// REGISTRANDO AS PRINCIAPAIS ROTAS DE CADA RECURSO
app.use('/', clienteRouters);
app.use('/', funcionarioRouters);
app.use('/', produtoRouters);
app.use('/', pedidoRouters);
app.use(cors()); // Habilita CORS para todas as rotas

// INCIALIZANDO O SERVIDOR NA PORTA 3000
app.listen(port, ()=>{
    console.log(`Servidor ouvindo na porta ${port}`);
});