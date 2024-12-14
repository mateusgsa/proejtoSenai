const {itemModel} = require('../models/itemModel');

const {produtosModel} = require('../models/produtoModel');
const {pedidoModel} = require('../models/produtoModel');

const userController = {
    index: (req, res) => {
        try {
            res.sendFile(path.join(__dirname, index.html));
        } catch (error) {
            res.send(`Erro ao acessar a pagina: ${error}`);
        }
        }
    };

    const itemController = {
        criarItem: async (id_pedido,id_produto) => {
            try {

                await itemModel.create({
                    id_pedido,
                    id_produto
                });

                return 1;
            } catch (error) {

                return error;

            }
        },

        deletarItem: async (id_item) => {
            try {
                const item = await itemModel.findByPk(id_item);

                if(!item){
                    return 0;
                }
                const result = await itemModel.destroy({
                    where: { id_item }
                });
                if (result > 0) {

                    return 1;
    
                } else {
    
                    return 0;
    
                }
                

            } catch (error) {

                return error;

            }
        },
    };

module.exports = {itemController};