const express = require('express');
const router = express.Router();

const pedController = require("../controllers/pedidoController");
const {userController, pedidoController} = pedController;

router.get("/", userController.index);
router.get("/listarPedidos", pedidoController.listarPedidos);
router.post("/criarPedido",pedidoController.criarPedido);
router.put("/editarPedido/:id_pedido", pedidoController.editarPedido);
router.delete("/deletarPedido/:id_pedido", pedidoController.deletarPedido);

module.exports = router;