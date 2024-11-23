const express = require('express');
const router = express.Router();

const lanattoacaiteria = require("../controllers/controllerFuncionario");
const {userController, teamController} = lanattoacaiteria;

router.get("/", userController.index);
router.get("/listarFuncionarios", teamController.listarFuncionarios);
router.post("/criarFuncionario", teamController.criarFuncionario);
router.put("/editarFuncionario/:id_funcionario", teamController.editarFuncionario);
router.delete("/deletarFuncionario/:id_funcionario", teamController.deletarFuncionario);

module.exports = router;