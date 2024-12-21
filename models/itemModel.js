// IMPORTA A INSTÂNCIA DO SEQUELIZE COM CONEXÃO DO BANCO DE DADOS
const { sequelize } = require('../config/config');
// IMPORTA OS DADOS DISPONÍVEIS NO SEQUELIZE
const DataTypes = require('sequelize');
// IMPORTANDO MODELOS DE PEDIDO E PRODUTOS PARA PODER REALIZAR REALICIONAMENTO ENTRE TABELAS
const { pedidoModel } = require('./pedidoModel');
const { produtosModel } = require('./produtoModel');

//DIFINE MODELO DA TABELA 
const itemModel = sequelize.define('Item', //NOME DO MODELO
    {
        // CHAVE PRIMÁRIA AUTOINCREMENTADA
        id_item: {
            type: DataTypes.INTEGER,// TIPO DO DADO
            autoIncrement: true,
            primaryKey: true
        },
        // CHAVE ESTRANGEIRA DO PRODUTO
        id_pedido: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: pedidoModel, // INDICAÇÃO DE QUAL MODELO A CHAVE É IMPORTADA
                key: 'id_pedido' // INDICAÇÃO DE QUAL TABELA DO MODELO A CHAVE PERTENCE 
            }
        },
        // CHAVE ESTRANGEIRA DO PRODUTO
        id_produto: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: produtosModel, // INDICAÇÃO DE QUAL MODELO A CHAVE É IMPORTADA
                key: 'id_produto' // INDICAÇÃO DE QUAL TABELA DO MODELO A CHAVE PERTENCE 
            }
        },
    },
    {
        tableName: 'Item', // NOME DA TABELA NO BANCO DE DADOS
        timestamps: false // DESATIVA A CRIAÇÃO AUTOMATICA DE COLUNAS
    }
);

// CONFIGURAÇÃO DE RELACIONAMENTO ENTRE pedidoModel E itemModel (1 para muitos)
pedidoModel.hasMany(itemModel, {
    foreignKey: 'id_pedido', // CHAVE ESTRANGEIRA TABELA PEDIDO
    as: 'Item' // ALIAS REFERENCIANDO TABELA (APELIDO)
});

// CONFIGURAÇÃO DE RELACIONAMENTO ENTRE itemModel e pedidoModel (muitos para 1)
itemModel.belongsTo(pedidoModel, {
    foreignKey: 'id_pedido', // CHAVE ESTRANGEIRA TABELA PEDIDO
    as: 'Pedido' // ALIAS REFERENCIANDO TABELA (APELIDO)
});

// CONFIGURAÇÃO DE RELACIONAMENTO ENTRE produtosModel e itemModel (1 para muitos)
produtosModel.hasMany(itemModel, {
    foreignKey: 'id_produto', // CHAVE ESTRANGEIRA TABELA PRODUTO
    as: 'Item'// ALIAS REFERENCIANDO TABELA (APELIDO)
});

// CONFIGURAÇÃO DE RELACIONAMENTO ENTRE itemModel e produtosModel (muitos para 1) 
itemModel.belongsTo(produtosModel, {
    foreignKey: 'id_produto', // CHAVE ESTRANGEIRA TABELA PRODUTO
    as: 'Produto' // ALIAS REFERENCIANDO TABELA (APELIDO)
});

// EXPORTA O MODELO ITEM
module.exports = { itemModel };