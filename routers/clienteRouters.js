const express = require('express');
const router = express.Router();

const clienteController = require("../controllers/clienteController");

router.get("/", clienteController.userController.index);
router.get("/listarClientes", clienteController.teamController.listarClientes);
router.post("/criarClientes", clienteController.teamController.criarClientes);
router.put("/editarClientes/:id_cliente", clienteController.teamController.editarClientes);
router.delete("/deletarEquipe/:id_cliente", clienteController.teamController.deletarEquipe);

module.exports = router;