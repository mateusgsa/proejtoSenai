// IMPORTANDO O MÓDULO "EXPRESS", FRAMEWORK QUE CRIA SERVIDORES WEB COM NODE.JS
const express = require("express");
// SOLICITAÇÃO PARA DEFINIR AS ROTAS ESPECÍFICAS DO PRODUTO 
const router = express.Router();

// SOLICITAÇÃO PARA DEFINIR AS ROTAS ESPECÍFICAS DO PRODUTO 
const p2Controller = require("../controllers/produtoController");
// EXTRAINDO AS PRÓPRIEDADES PARA O OBJETIVO
const {userController, produtosController} = p2Controller;

/*
ROTA GET COM A FUNÇÃO INDEX DO USER CONTROLLER
ROTA GET  LISTAR PRODUTO CADASTRADOS, RESPONSÁVEL POR RECUPERAR TODOS OS PRODUTO DO BANCO DE DADOS 
ROTA POST PARA CADASTRAR PRODUTO, RESPONSÁVEL POR ENVIAR DADOS  PARA SEREM SALVOS NO BANCO DE DADOS
ROTA PUT PARA EDITAR PRODUTO, RESPONSÁVEL POR ATUAIZAR OS DADOS DOS PRODUTO NO BANCO DE DADOS
ROTA DELETE  PARA DELETAR PRODUTO, RESPONSÁVEL POR DELETAR CADASTRO DO PRODUTO
*/
router.get("/",userController.index);
router.get("/listarProduto", produtosController.listarProduto);
router.post("/criarProduto", produtosController.criarProduto);
router.put("/editarProduto/:id_produto", produtosController.editarProduto);
router.delete("/deletarProduto/:id_produto", produtosController.deletarProduto);

// EXPORTAR O ROTAS DO PRODUTO
module.exports = router;