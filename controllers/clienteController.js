//IMPORTANDO OS MODEL CLIENTES, QUE REPRESENTA A TABELA NO BANCO DE DADOS
const {clienteModel} = require('../models/clienteModel');

//GERENCIAR ROTAS RELACIONAMENTOS AO USUÁRIO
const userController = {

    // RENDERIZAR PAGINA INICIAL
    index: (req, res) => {
        try {
            res.sendFile(path.join(__dirname, index.html)); // ENVIA O ARQUIVO HTML 
        } catch (error) {
            res.send(`Erro ao acessar a pagina: ${error}`); // CASO OCORRER ERRO
        }
    }
};

// GERENCIAR ROTAS RELACIONADAS A TABELA CLIENTE
const clienteController = {

    //METEDO LISTAR CLIENTES
    listarClientes: async (req, res) => {
        try {
            const Clientes = await clienteModel.findAll(); // PARA BUSCAR TODOS OS REGISTROS DA TABELA CLIENTE
            res.send(Clientes); // RESPONDE COM A LISTA CLIENTES 
        } catch (error) {
            res.send(`Erro ao acessar a pagina: ${error}`); // CASO OCORRER ERRO
        }
    },
    
    // METODO CRIAR CLIENTES
    criarClientes: async (req, res) => {
        try {
            // DADOS DO CLIENTE PARA O CORPO DA REQUISIÇÃO
            const { nomeCliente, enderecoCliente, cpfCliente, telefoneCliente, emailCliente, senhaCliente } = req.body;
            // CRIA UM NOVO REGISTO NO BANCO DE DADOS
            await clienteModel.create({ nomeCliente, enderecoCliente, cpfCliente, telefoneCliente, emailCliente, senhaCliente });
            // REDIRECIONA PARA LISTA DE CLIENTES, PARA EXIBIR O NOVO CADASTRO
            res.redirect("listarClientes");

        } catch (error) {

            res.send(`Erro ao acessar a pagina: ${error}`); // CASO OCORRER ERRO

        }

    },

    // METODO CRIAR CLIENTES
    editarClientes: async (req, res) => {
        try {

            // UTLIZA O ID DO CLIENTE NA URL PARA LOCALIZAR O MESMO QUE SERÁ ALTERADO ATRAVÉS DO CORPO DA REQUISIÇÃO
            const { id_cliente } = req.params;
            const { nomeCliente, enderecoCliente, cpfCliente, telefoneCliente, emailCliente, senhaCliente } = req.body;

            // BUSCA O CLIENTE PELA CHAVE PRIMÁRIA
            const Clientes = await clienteModel.findByPk(id_cliente);

            if (!Clientes) {
                return res.status(404).send(`Cliente não encotrado!`); // CASO OCORRER ERRO RETORNO O ERRO 404
            }

            // ATUALIZA OS DADOS DO CLIENTE NO BANCO DE DADOS
            await clienteModel.update(
                { nomeCliente, enderecoCliente, cpfCliente, telefoneCliente, emailCliente, senhaCliente },
                { where: { id_cliente } }
            );

            res.status(200).json({ message: "Cliente atualizado com sucesso!" }); // RETORNA MENSAGEM DE SUCESSO

        } catch (error) {

            res.send(`Erro ao acessar a pagina: ${error}`); // CASO OCORRER ERRO

        }
    },
    
    // METODO PARA DELETAR CLIENTE 
    deletarCliente: async (req, res) => {
        try {

            // UTLIZA O ID DO CLIENTE NA URL
            const { id_cliente } = req.params;

            // BUSCA O CLIENTE NO BANCO DE DADOS
            const Cliente = await clienteModel.findByPk(id_cliente);

            if (!Cliente) {
                return res.status(404).send(`Cliente não encotrado!`); // RETORNA MENSAGEM
            }

            // DELETA O CLIENTE NO BANCO DE DADOS
            const result = await clienteModel.destroy({
                where: { id_cliente }
            });

            if (result > 0) {
                return res.status(200).json({ message: "Cliente deletado com sucesso!" }); // RETORNA MENSAGEM
            
            } else{

                return res.status(404).json({ message: "Erro ao excluir cliente!" }); // CASO OCORRER ERRO

            }
        } catch (error) {

            res.send(`Erro ao acessar a pagina: ${error}`);  // CASO OCORRER ERRO

        }
    }
};

// EXPORTA OS CONTROLERS
module.exports = { userController, clienteController };