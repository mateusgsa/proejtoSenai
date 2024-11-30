const {sequelize} = require('../config/config'); //VARIAVEL DE CONEXÃO DO BANCO DE DADOS
const DataTypes = require('sequelize');

//DEFINE OS DADOS
const funcionarioModel = sequelize.define('Funcionario', {
    id_funcionario:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nomeFuncionario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    enderecoFuncionario: {
        type: DataTypes.STRING,
        allowNull: true
    },
    cpfFuncionario:{
        type: DataTypes.STRING,
        allowNull: true
    },
    telefoneFuncionario:{
        type: DataTypes.STRING,
        allowNull: true
    },
    emailFuncionario:{
        type: DataTypes.STRING,
        allowNull: true
    },
    cargoFuncionario:{
        type: DataTypes.STRING,
        allowNull: true
    },
    salarioFuncionario:{
        type: DataTypes.DECIMAL(10,2),
        allowNull: true
    },
    senhaFuncionario:{
        type: DataTypes.STRING,
        allowNull: true
    },
    permissaoFuncionario:{
        type: DataTypes.BOOLEAN,
        allowNull: true
    }

},
{
    tableName: 'Funcionario', 
    timestamps: false
}); 

module.exports = {funcionarioModel};