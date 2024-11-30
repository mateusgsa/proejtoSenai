const express = require('express');
const router = express.Router();

const cliController = require("../controllers/clienteController");
const {userController, clienteController} = cliController;

router.get("/", userController.index);
router.get("/listarClientes", clienteController.listarClientes);
router.post("/criarClientes", clienteController.criarClientes);
router.put("/editarClientes/:id_cliente", clienteController.editarClientes);
router.delete("/deletarEquipe/:id_cliente", clienteController.deletarEquipe);

module.exports = router;