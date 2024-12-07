const { sequelize } = require('../config/config');  // variavel de conexão.
const DataTypes = require('sequelize'); // definir o tipo de dados(string,int,data,etc)
const { pedidoModel } = require('./pedidoModel');
const { produtosModel } = require('./produtoModel');

const itemModel = sequelize.define('Item', {
    id_item: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_pedido: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: pedidoModel,
            key: 'id_pedido'
        }
    },
    id_produto: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: produtosModel,
            key: 'id_produto'
        }
    },
},
    {
        tableName: 'Item',
        timestamps: false // Esse comandos serve para não criar uma coluna nessa tabela.
    }
);

pedidoModel.belongsToMany(produtosModel, { through: itemModel });
produtosModel.belongsToMany(pedidoModel, { through: itemModel });

pedidoModel.hasMany(itemModel, {
    foreignKey: 'id_pedido',
    as: 'Item'
});

itemModel.belongsTo(pedidoModel, {
    foreignKey: 'id_pedido',
    as: 'Pedido'
});

produtosModel.hasMany(itemModel, {
    foreignKey: 'id_produto',
    as: 'Item'
});

itemModel.belongsTo(produtosModel, {
    foreignKey: 'id_produto',
    as: 'Produto'
});

module.exports = { itemModel };