const { pedidoModel } = require('../models/pedidoModel');

const { clienteModel } = require('../models/clienteModel');
const { funcionarioModel } = require('../models/funcionarioModel');
const { itemModel } = require('../models/itemModel');
const { produtosModel } = require('../models/produtoModel');
const { itemController } = require('./itemContoller');

const userController = {
    index: (req, res) => {
        try {
            res.sendFile(path.join(__dirname, index.html));
        } catch (error) {
            res.send(`Erro ao acessar a pagina: ${error}`);
        }
    }
};

const pedidoController = {
    listarPedidos: async (req, res) => {
        try {

            const { id_pedido } = req.query;
            let whereCondition = {};

            if (id_pedido) {
                whereCondition.id_pedido = id_pedido;
            }

            const pedidos = await pedidoModel.findAll({
                where: whereCondition,
                order: [["id_pedido", "ASC"]],
                include: [
                    {
                        model: clienteModel,
                        as: 'Cliente',
                        required: true,
                        attributes: ['id_cliente', 'nomeCliente']
                    },

                    {
                        model: funcionarioModel,
                        as: 'Funcionario',
                        required: true,
                        attributes: ['id_funcionario', 'nomeFuncionario']
                    },
                    {
                        model: itemModel,
                        as: 'Item',
                        required: true,
                        attributes: ['id_produto'],
                        include: [
                            {
                                model: produtosModel,
                                as: 'Produto',
                                required: true,
                                attributes: ['nomeProduto']
                            }
                        ]
                    }
                ]
            });


            res.send(pedidos);
        } catch (error) {

            res.status(500).send("Erro ao acessar a página: " + error);
        }
    },

    criarPedido: async (req, res) => {
        try {
            const {
                id_cliente,
                id_funcionario,
                dataPedido,
                quantidadeItens,
                totalPedido,
                itens
            } = req.body;

            await pedidoModel.create({
                id_cliente,
                id_funcionario,
                dataPedido,
                quantidadeItens,
                totalPedido,
            }, {
                include: [{
                    model: itemModel,  
                    as: 'Item',       
                    required: true     
                }]
            });

            const ultimoPedido = await pedidoModel.findOne({
                order: [['id_pedido', 'DESC']],
                attributes: ['id_pedido']
            });

            await Promise.all(itens.map(async (item) => {
                await itemModel.create({
                    id_pedido: ultimoPedido.id_pedido,
                    id_produto: item.id_produto
                });
            }));    

            res.redirect("/listarPedidos");

        } catch (error) {
            res.send(`Erro ao acessar a pagina: ${error}`);
        }
    },

    editarPedido: async (req, res) => {

        try {
            const { id_pedido } = req.params;
            const {
                id_cliente,
                id_funcionario,
                dataPedido,
                quantidadeItens,
                totalPedido,
                itens
            } = req.body;

            const pedido = await pedidoModel.findByPk(id_pedido);

            if (!pedido) {
                return res.status(404).send(`Pedido não encontrado!`);
            }

            await pedidoModel.update(
                {
                    id_cliente,
                    id_funcionario,
                    dataPedido,
                    quantidadeItens,
                    totalPedido
                },
                { where: { id_pedido } }

            );

            await itemModel.destroy({
                where: {id_pedido}
            });

            await Promise.all(itens.map(async (item) => {
                await itemModel.create({
                    id_pedido: ultimoPedido.id_pedido,
                    id_produto: item.id_produto
                });
            }));

            res.status(200).json({ message: "Pedido atualizado com sucesso!" });

        } catch (error) {

            res.send(`Erro ao acessar a pagina: ${error}`);
        }
    },

    deletarPedido: async (req, res) => {
        try {
            const { id_pedido } = req.params;

            const pedido = await pedidoModel.findByPk(id_pedido);

            if (!pedido) {
                return res.status(404).send(`Pedido não encontrado!`);
            }

            const result = await pedidoModel.destroy({
                where: { id_pedido }
            });

            if (result > 0) {

                return res.status(200).json({ messagem: "Pedido excluido com sucesso!" });

            } else {

                return res.status(404).send("Erro ao excluir o pedido!");

            }

        } catch (error) {

            res.send(`Erro ao acessar a pagina: ${error}`);

        }
    }
};

module.exports = { userController, pedidoController };