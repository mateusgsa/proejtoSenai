const express = require("express");
const app = express();
const port = 3000;

const path = require("path"); 

const ClienteRoute = require("./routers/clienteRouters");

const {connectToDatabase} = require("./config/config");
connectToDatabase();

app.use(express.json());

app.use(express.static(path.join(__dirname,"/views")));

app.use('/', ClienteRoute);

app.listen(port, ()=>{
    console.log(`Servidor ouvindo na porta ${port}`);
});