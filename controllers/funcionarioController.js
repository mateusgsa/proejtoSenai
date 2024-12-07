//IMPORTANDO OS MODELOS 
const {funcionarioModel} = require('../models/funcionarioModel');

const userController = {
    index: (req, res) => {
        try {
            res.sendFile(path.join(__dirname, index.html));
        } catch (error) {
            res.send(`Erro ao acessar a pagina: ${error}`);
        }
        }
    };

const funcionarioController = {
    listarFuncionarios: async (req, res) => {
        try {
            const funcionario = await funcionarioModel.findAll();
            res.send(funcionario);
        } catch (error) {
            res.send(`Erro ao acessar a pagina: ${error}`);            
        }
    },

    criarFuncionario: async (req, res) => {
        try {
            const {
                nomeFuncionario, 
                enderecoFuncionario,
                cpfFuncionario, 
                telefoneFuncionario, 
                emailFuncionario, 
                cargoFuncionario, 
                salarioFuncionario, 
                senhaFuncionario, 
                permissaoFuncionario} = req.body;
           
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

            res.redirect("/listarFuncionarios");
            
        } catch (error) {
            res.send(`Erro ao acessar a pagina: ${error}`);
        }
    },

    editarFuncionario: async (req, res) => {

        try {
            const {id_funcionario} = req.params;
            const {
                nomeFuncionario, 
                enderecoFuncionario,
                cpfFuncionario, 
                telefoneFuncionario, 
                emailFuncionario, 
                cargoFuncionario, 
                salarioFuncionario, 
                senhaFuncionario, 
                permissaoFuncionario} = req.body;
            
            const funcionario = await funcionarioModel.findByPk(id_funcionario);

            if (!funcionario){
                return res.status(404).send(`Funcionário não encotrado!`);
            }

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
                {where: {id_funcionario}}

            );

            res.status(200).json({message: "Funcionário atualizado com sucesso!"});

        } catch (error) {
            
            res.send(`Erro ao acessar a pagina: ${error}`);
        }
    },

    deletarFuncionario: async (req, res) => {
        try {
            const {id_funcionario} = req.params;

            const funcionario = await funcionarioModel.findByPk(id_funcionario);

            if (!funcionario){
                return res.status(404).send(`Funcionário não encotrado!`);
            }

           const result = await funcionarioModel.destroy( {
            where: {id_funcionario}     
           });

           if (result > 0) {

            return res.status(200).json({messagem: "Funcionário excluido com sucesso!"});  

            } else {

            return res.status(404).send("Erro ao excluir funcionário!");

            }
       
        } catch (error) {

            res.send(`Erro ao acessar a pagina: ${error}`);
            
        }
    }
};

module.exports = {userController, funcionarioController};