// IMPORTANDO O MÓDULO "EXPRESS", FRAMEWORK QUE CRIA SERVIDORES WEB COM NODE.JS
const express = require('express');
// SOLICITAÇÃO PARA DEFINIR AS ROTAS ESPECÍFICAS DO FUNCIONÁRIO 
const router = express.Router();

// SOLICITAÇÃO PARA DEFINIR AS ROTAS ESPECÍFICAS DO FUNCIONÁRIO 
const funController = require("../controllers/funcionarioController");
// EXTRAINDO AS PRÓPRIEDADES PARA O OBJETIVO
const {userController, funcionarioController} = funController;


/*
ROTA GET COM A FUNÇÃO INDEX DO USER CONTROLLER
ROTA GET  LISTAR FUNCIONÁRIO CADASTRADOS, RESPONSÁVEL POR RECUPERAR TODOS OS FUNCIONÁRIO DO BANCO DE DADOS 
ROTA POST PARA CADASTRAR FUNCIONÁRIO, RESPONSÁVEL POR ENVIAR DADOS  PARA SEREM SALVOS NO BANCO DE DADOS
ROTA PUT PARA EDITAR FUNCIONÁRIO, RESPONSÁVEL POR ATUAIZAR OS DADOS DOS FUNCIONÁRIO NO BANCO DE DADOS
ROTA DELETE  PARA DELETAR FUNCIONÁRIO, RESPONSÁVEL POR DELETAR CADASTRO DO FUNCIONÁRIO
*/
router.get("/", userController.index);
router.get("/listarFuncionarios", funcionarioController.listarFuncionarios);
router.post("/criarFuncionario",funcionarioController.criarFuncionario);
router.put("/editarFuncionario/:id_funcionario", funcionarioController.editarFuncionario);
router.delete("/deletarFuncionario/:id_funcionario", funcionarioController.deletarFuncionario);

// EXPORTAR O ROTAS DO FUNCIONÁRIO
module.exports = router;