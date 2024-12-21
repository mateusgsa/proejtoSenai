// IMPORTANDO O MÓDULO "EXPRESS", FRAMEWORK QUE CRIA SERVIDORES WEB COM NODE.JS
const express = require('express');

// SOLICITAÇÃO PARA DEFINIR AS ROTAS ESPECÍFICAS DO CLIENTES
const router = express.Router();

//IMPORTANDO O MODULO DE CONTROLES DO CLIENTE 
const cliController = require("../controllers/clienteController");
//IMPORTANDO O MODULO DE CONTROLES DO CLIENTE 
const {userController, clienteController} = cliController;

// ROTA GET COM A FUNÇÃO INDEX DO USER CONTROLLER
router.get("/", userController.index);
//  ROTA GET  LISTAR CLIENTES CADASTRADOS, RESPONSÁVEL POR RECUPERAR TODOS OS CLIENTES DO BANCO DE DADOS 
router.get("/listarClientes", clienteController.listarClientes);
// ROTA POST PARA CADASTRAR CLIENTE, RESPONSÁVEL POR ENVIAR DADOS  PARA SEREM SALVOS NO BANCO DE DADOS
router.post("/criarClientes", clienteController.criarClientes);
// ROTA PUT PARA EDITAR CLIENTE, RESPONSÁVEL POR ATUAIZAR OS DADOS DOS CLIENTES NO BANCO DE DADOS
router.put("/editarClientes/:id_cliente", clienteController.editarClientes);
// ROTA DELETE  PARA DELETAR CLIENTE, RESPONSÁVEL POR DELETAR CADASTRO DO CLIENTE
router.delete("/deletarCliente/:id_cliente", clienteController.deletarCliente);
// EXPORTAR O ROTAS DO CLIENTE
module.exports = router;