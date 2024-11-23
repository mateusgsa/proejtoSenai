//IMPORTANDO OS MODELOS 
const ClienteModel = require('../models/clienteModels');
const teamModelCliente = ClienteModel.teamModelCliente;

const userController = {
    index: (req, res) => {
        try {
            res.sendFile(path.join(__dirname, index.html));
        } catch (error) {
            res.send(`Erro ao acessar a pagina: ${error}`);
        }
    }
};

const teamController = {
    listarClientes: async (req, res) => {
        try {
            const Clientes = await teamModelCliente.findAll();
            res.send(Clientes);
        } catch (error) {
            res.send(`Erro ao acessar a pagina: ${error}`);
        }
    },

    criarClientes: async (req, res) => {
        try {

            const { nomeCliente, enderecoCliente, cpfCliente, telefoneCliente, emailCliente, senhaCliente } = req.body;
            await teamModelCliente.create({ nomeCliente, enderecoCliente, cpfCliente, telefoneCliente, emailCliente, senhaCliente });
            res.redirect("listarClientes");

        } catch (error) {

            res.send(`Erro ao acessar a pagina: ${error}`);

        }

    },

    editarClientes: async (req, res) => {
        try {

            const { id_cliente } = req.params;
            const { nomeCliente, enderecoCliente, cpfCliente, telefoneCliente, emailCliente, senhaCliente } = req.body;

            const Clientes = await teamModelCliente.findByPk(id_cliente);

            if (!Clientes) {
                return res.status(404).send(`Cliente não encotrado!`);
            }

            await teamModelCliente.update(
                { nomeCliente, enderecoCliente, cpfCliente, telefoneCliente, emailCliente, senhaCliente },
                { where: { id_cliente } }
            );

            res.status(200).json({ message: "Cliente atualizado com sucesso!" });

        } catch (error) {

            res.send(`Erro ao acessar a pagina: ${error}`);

        }
    },

    deletarEquipe: async (req, res) => {
        try {
            const { id_cliente } = req.params;

            const Cliente = await teamModelCliente.findByPk(id_cliente);

            if (!Cliente) {
                return res.status(404).send(`Cliente não encotrado!`);
            }

            const result = await teamModelCliente.destroy({
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

module.exports = { userController, teamController };