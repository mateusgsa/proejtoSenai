const p2Model = require('../models/produtoModel');
const produtosModel = p2Model.produtosModel;

const userController = {
    index: (req, res) => {
        try {
            res.sendFile("index.html");
        } catch (error) {
            res.send(`Erro ao acessar a pagina:${error}`);
        }
    }
}

const produtosController = {
    listarProduto: async (req, res) => {
        try {
            const produtos = await produtosModel.findAll();

            res.send(produtos);
        } catch (error) {
            res.send(`Erro ao acessar a pagina ${error}`)
        }
    },

    criarProduto: async (req, res) => {
        try {
            const { nomeProduto, descricaoProduto, quantidadeProduto, pesoProduto, precoProduto, disponibilidadeProduto } = req.body;
            await produtosModel.create({ nomeProduto, descricaoProduto, quantidadeProduto, pesoProduto, precoProduto, disponibilidadeProduto });
            res.redirect("/listarProduto");
        } catch (error) {
            res.send(`Erro ao acessar a pagina ${error}`)
        }
    },
    editarProduto: async (req, res) => {
        try {
            const {id_produto} = req.params;
            const {nomeProduto, descricaoProduto, quantidadeProduto, pesoProduto, precoProduto, disponibilidadeProduto} = req.body;

            const produto = await produtosModel.findByPk(id_produto);

            if(!produto){
                return res.status(404).send("Produto não encontrado!");
            }

            await produtosModel.update({nomeProduto, descricaoProduto, quantidadeProduto, pesoProduto, precoProduto, disponibilidadeProduto},
                {where: {id_produto}}
            );

            res.status(200).json({message: "Produto atualizado com sucesso!"});

        } catch (error) {
            res.send(`Erro ao acessar a pagina: ${error}`)
        }
    },
    deletarProduto: async(req,res)=>{
        try {
            const {id_produto} = req.params;

            const produto = await produtosModel.findByPk(id_produto);

            if(!produto){
                return res.status(404).send("produto não encontrado!");
            }

            const result = await produtosModel.destroy({
                where: {id_produto}
            });

            if (result > 0) {
                return res.status(200).json({message: "produto excluido com sucesso!"});

            } else {
                return res.status(404).send("Erro ao excluir o produto!");
            }

        } catch (error) {
            res.send(`Erro ao acessar a pagina: ${error}`)
        }
    }
}

module.exports = { userController, produtosController };