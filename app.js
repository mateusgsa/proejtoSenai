const express = require("express");
const app = express();
const port = 3000;

const path = require("path"); 

const clienteRouters = require("./routers/clienteRouters");
const funcionarioRouters = require("./routers/funcionarioRouters");
const produtoRouters = require("./routers/produtoRouters");

const {connectToDatabase} = require("./config/config");
connectToDatabase();

app.use(express.json());

app.use(express.static(path.join(__dirname,"/views")));

app.use('/', clienteRouters);
app.use('/', funcionarioRouters);
app.use('/', produtoRouters);

app.listen(port, ()=>{
    console.log(`Servidor ouvindo na porta ${port}`);
});