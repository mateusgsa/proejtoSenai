const express = require('express');
const router = express.Router();

const funController = require("../controllers/funcionarioController");
const {userController, funcionarioController} = funController;

router.get("/", userController.index);
router.get("/listarFuncionarios", funcionarioController.listarFuncionarios);
router.post("/criarFuncionario",funcionarioController.criarFuncionario);
router.put("/editarFuncionario/:id_funcionario", funcionarioController.editarFuncionario);
router.delete("/deletarFuncionario/:id_funcionario", funcionarioController.deletarFuncionario);

module.exports = router;