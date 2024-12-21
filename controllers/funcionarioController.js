//IMPORTANDO OS MODEL FUNCIONÁRIOS, QUE REPRESENTA A TABELA NO BANCO DE DADOS
const { funcionarioModel } = require('../models/funcionarioModel');

//GERENCIAR ROTAS RELACIONAMENTOS AO USUÁRIO
const userController = {
    // RENDERIZAR PAGINA INICIAL
    index: (req, res) => {
        try {
            res.sendFile(path.join(__dirname, index.html));  // ENVIA O ARQUIVO HTML 
        } catch (error) {
            res.send(`Erro ao acessar a pagina: ${error}`); // CASO OCORRER ERRO
        }
    }
};

// GERENCIAR ROTAS RELACIONADAS A TABELA FUNCIONÁRIOS
const funcionarioController = {

    // METODO LISTAR FUNCIONÁRIOS
    listarFuncionarios: async (req, res) => {
        try {
            const funcionario = await funcionarioModel.findAll(); // PARA BUSCAR TODOS OS REGISTROS DA TABELA FUNCIONÁRIO
            res.send(funcionario); // RESPONDE COM A LISTA DE FUNNCIOÁRIOS
        } catch (error) {
            res.send(`Erro ao acessar a pagina: ${error}`); // CASO OCORRER ERRO           
        }
    },

    // METODO CRIAR FUNCIONÁRIOS
    criarFuncionario: async (req, res) => {
        try {
            // DADOS DO FUNCIONÁRIO PARA O CORPO DA REQUISIÇÃO
            const {
                nomeFuncionario,
                enderecoFuncionario,
                cpfFuncionario,
                telefoneFuncionario,
                emailFuncionario,
                cargoFuncionario,
                salarioFuncionario,
                senhaFuncionario,
                permissaoFuncionario } = req.body;
            // CRIA UM NOVO REGISTO NO BANCO DE DADOS
            await funcionarioModel.create({
                nomeFuncionario,
                enderecoFuncionario,
                cpfFuncionario,
                telefoneFuncionario,
                emailFuncionario,
                cargoFuncionario,
                salarioFuncionario,
                senhaFuncionario,
                permissaoFuncionario
            });
            // REDIRECIONA PARA LISTA DE FUNCIONÁRIOS, PARA EXIBIR O NOVO CADASTRO
            res.redirect("/listarFuncionarios");

        } catch (error) {
            res.send(`Erro ao acessar a pagina: ${error}`); // CASO OCORRER ERRO
        }
    },

    // METODO CRIAR FUNCIONÁRIOS
    editarFuncionario: async (req, res) => {

        try {
            // UTLIZA O ID DO FUNCIONÁRIO NA URL PARA LOCALIZAR O MESMO QUE SERÁ ALTERADO ATRAVÉS DO CORPO DA REQUISIÇÃO
            const { id_funcionario } = req.params;
            const {
                nomeFuncionario,
                enderecoFuncionario,
                cpfFuncionario,
                telefoneFuncionario,
                emailFuncionario,
                cargoFuncionario,
                salarioFuncionario,
                senhaFuncionario,
                permissaoFuncionario } = req.body;

            // BUSCA O FUNCIONÁRIO PELA CHAVE PRIMÁRIA
            const funcionario = await funcionarioModel.findByPk(id_funcionario);

            if (!funcionario) {
                return res.status(404).send(`Funcionário não encotrado!`); // CASO OCORRER ERRO RETORNO O ERRO 404
            }

            // ATUALIZA OS DADOS DO FUNCIONÁRIO NO BANCO DE DADOS
            await funcionarioModel.update(
                {
                    nomeFuncionario,
                    enderecoFuncionario,
                    cpfFuncionario,
                    telefoneFuncionario,
                    emailFuncionario,
                    cargoFuncionario,
                    salarioFuncionario,
                    senhaFuncionario,
                    permissaoFuncionario
                },
                { where: { id_funcionario } }

            );

            res.status(200).json({ message: "Funcionário atualizado com sucesso!" }); // RETORNA MENSAGEM DE SUCESSO

        } catch (error) {

            res.send(`Erro ao acessar a pagina: ${error}`); // CASO OCORRER ERRO
        }
    },
    // METODO PARA DELETAR FUNCIONÁRIO 
    deletarFuncionario: async (req, res) => {
        try {
            // UTLIZA O ID DO FUNCIONÁRIO NA URL
            const { id_funcionario } = req.params;

            // BUSCA O FUNCIONÁRIO NO BANCO DE DADOS
            const funcionario = await funcionarioModel.findByPk(id_funcionario);

            if (!funcionario) {
                return res.status(404).send(`Funcionário não encotrado!`); // RETORNNA A MENSAGEM
            }

            // DELETA O FUNCIONÁRIO NO BANCO DE DADOS
            const result = await funcionarioModel.destroy({
                where: { id_funcionario }
            });

            if (result > 0) {

                return res.status(200).json({ messagem: "Funcionário excluido com sucesso!" });  // RETORNA MENSAGEM

            } else {

                return res.status(404).send("Erro ao excluir funcionário!"); // CASO OCORRER ERRO

            }

        } catch (error) {

            res.send(`Erro ao acessar a pagina: ${error}`); // CASO OCORRER ERRO

        }
    }
};

 // EXPORTA OS CONTROLERS
module.exports = { userController, funcionarioController };