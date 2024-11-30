const express = require('express');
const router = express.Router();

const funContoller = require("../controllers/funcionarioController");
const {userController, funcionarioController} = funContoller;

router.get("/", userController.index);
router.get("/listarFuncionarios", funcionarioController.listarFuncionarios);
router.post("/criarFuncionario",funcionarioController.criarFuncionario);
router.put("/editarFuncionario/:id_funcionario", funcionarioController.editarFuncionario);
router.delete("/deletarFuncionario/:id_funcionario", funcionarioController.deletarFuncionario);

module.exports = router;