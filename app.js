const express = require("express");
const app = express();
const port = 3000;

const path = require("path"); 

const routerFuncionario = require("./routers/routerFuncionario");

const {connectToDatabase} = require("./config/config");
connectToDatabase();

app.use(express.json());

app.use(express.static(path.join(__dirname,"/views")));

app.use('/', routerFuncionario);

app.listen(port, ()=>{
    console.log(`Servidor ouvindo na porta ${port}`);
});