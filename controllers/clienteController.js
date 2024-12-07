//IMPORTANDO OS MODELOS 
const {clienteModel} = require('../models/clienteModel');

const userController = {
    index: (req, res) => {
        try {
            res.sendFile(path.join(__dirname, index.html));
        } catch (error) {
            res.send(`Erro ao acessar a pagina: ${error}`);
        }
    }
};

const clienteController = {
    listarClientes: async (req, res) => {
        try {
            const Clientes = await clienteModel.findAll();
            res.send(Clientes);
        } catch (error) {
            res.send(`Erro ao acessar a pagina: ${error}`);
        }
    },

    criarClientes: async (req, res) => {
        try {

            const { nomeCliente, enderecoCliente, cpfCliente, telefoneCliente, emailCliente, senhaCliente } = req.body;
            await clienteModel.create({ nomeCliente, enderecoCliente, cpfCliente, telefoneCliente, emailCliente, senhaCliente });
            res.redirect("listarClientes");

        } catch (error) {

            res.send(`Erro ao acessar a pagina: ${error}`);

        }

    },

    editarClientes: async (req, res) => {
        try {

            const { id_cliente } = req.params;
            const { nomeCliente, enderecoCliente, cpfCliente, telefoneCliente, emailCliente, senhaCliente } = req.body;

            const Clientes = await clienteModel.findByPk(id_cliente);

            if (!Clientes) {
                return res.status(404).send(`Cliente não encotrado!`);
            }

            await clienteModel.update(
                { nomeCliente, enderecoCliente, cpfCliente, telefoneCliente, emailCliente, senhaCliente },
                { where: { id_cliente } }
            );

            res.status(200).json({ message: "Cliente atualizado com sucesso!" });

        } catch (error) {

            res.send(`Erro ao acessar a pagina: ${error}`);

        }
    },

    deletarCliente: async (req, res) => {
        try {
            const { id_cliente } = req.params;

            const Cliente = await clienteModel.findByPk(id_cliente);

            if (!Cliente) {
                return res.status(404).send(`Cliente não encotrado!`);
            }

            const result = await clienteModel.destroy({
                where: { id_cliente }
            });

            if (result > 0) {
                return res.status(200).json({ message: "Cliente deletado com sucesso!" });
            
            } else{

                return res.status(404).json({ message: "Erro ao excluir cliente!" });

            }
        } catch (error) {

            res.send(`Erro ao acessar a pagina: ${error}`);

        }
    }
};

module.exports = { userController, clienteController };