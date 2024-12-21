// IMPORTANDO O MÓDULO "EXPRESS", FRAMEWORK QUE CRIA SERVIDORES WEB COM NODE.JS
const express = require('express');
// SOLICITAÇÃO PARA DEFINIR AS ROTAS ESPECÍFICAS DO PEDIDO
const router = express.Router();

// SOLICITAÇÃO PARA DEFINIR AS ROTAS ESPECÍFICAS DO PEDIDO
const pedController = require("../controllers/pedidoController");
// EXTRAINDO AS PRÓPRIEDADES PARA O OBJETIVO
const {userController, pedidoController} = pedController;

/*
ROTA GET COM A FUNÇÃO INDEX DO USER CONTROLLER
ROTA GET  LISTAR PEDIDO CADASTRADOS, RESPONSÁVEL POR RECUPERAR TODOS OS PEDIDO DO BANCO DE DADOS 
ROTA POST PARA CADASTRAR PEDIDO, RESPONSÁVEL POR ENVIAR DADOS  PARA SEREM SALVOS NO BANCO DE DADOS
ROTA PUT PARA EDITAR PEDIDO, RESPONSÁVEL POR ATUAIZAR OS DADOS DOS PEDIDO NO BANCO DE DADOS
ROTA DELETE  PARA DELETAR PEDIDO, RESPONSÁVEL POR DELETAR CADASTRO DO PEDIDO
*/
router.get("/", userController.index);
router.get("/listarPedidos", pedidoController.listarPedidos);
router.post("/criarPedido",pedidoController.criarPedido);
router.put("/editarPedido/:id_pedido", pedidoController.editarPedido);
router.delete("/deletarPedido/:id_pedido", pedidoController.deletarPedido);

// EXPORTAR O ROTAS DO PEDIDOS
module.exports = router;