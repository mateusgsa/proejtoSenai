const express = require("express");
const router = express.Router();

const p2Controller = require("../controllers/produtoController");
const {userController, produtosController} = p2Controller;

router.get("/",userController.index);
router.get("/listarProduto", produtosController.listarProduto);
router.post("/criarProduto", produtosController.criarProduto);
router.put("/editarProduto/:id_produto", produtosController.editarProduto);
router.delete("/deletarProduto/:id_produto", produtosController.deletarProduto);

module.exports = router;