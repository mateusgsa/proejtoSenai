
const { FOREIGNKEYS } = require('sequelize/lib/query-types');
const {sequelize} = require('../config/config'); 
const DataTypes = require('sequelize');

const {clienteModel} = require('./clienteModel');
const {funcionarioModel} = require('./funcionarioModel');

const pedidoModel = sequelize.define('Pedido', {
    id_pedido:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_cliente:{
        type: DataTypes.INTEGER,
        allowNull: true,
        references:{
            model: clienteModel,
            key: 'id_cliente'
        }
    },
    id_funcionario:{
        type: DataTypes.INTEGER,
        allowNull: true,
        references:{
            model: funcionarioModel,
            key: 'id_funcionario'
        }
    },
    dataPedido:{
        type: DataTypes.DATE,
        allowNull: true,
    },
    quantidadeItens: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    totalPedido: {
        type: DataTypes.DECIMAL,
        allowNull: true
    }
},

{
    tableName: 'Pedido',
    timestamps: false
});



clienteModel.hasMany(pedidoModel, {
    foreignKey: 'id_cliente',
    as: 'Pedido' 
});

pedidoModel.belongsTo(clienteModel, {
    foreignKey: 'id_cliente',
    as: 'Cliente'
});

funcionarioModel.hasMany(pedidoModel, {
    foreignKey: 'id_funcionario',
    as: 'Pedido'
});

pedidoModel.belongsTo(funcionarioModel, {
    foreignKey: 'id_funcionario',
    as: 'Funcionario'
});

module.exports = {pedidoModel, funcionarioModel, clienteModel};