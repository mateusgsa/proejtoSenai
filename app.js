const express = require('express');
const app = express()
const path = require("path");
const port = 3000;

const p2Route = require("./routers/routesProduto");
const {connectToDataBase} = require("./config/config")
connectToDataBase();

app.use(express.json());

app.use(express.static(path.join(__dirname,"/views")));

app.use('/', p2Route);

app.listen(port, ()=>{
    console.log(`Servidor ouvindo na porta ${port}`)
});