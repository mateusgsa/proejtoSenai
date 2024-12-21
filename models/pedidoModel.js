
// IMPORTANDO CONSTANTE FOREIGNKEYS DO SEQUELIZE
const { FOREIGNKEYS } = require('sequelize/lib/query-types');
// IMPORTA A INSTÂNCIA DO SEQUELIZE COM CONEXÃO DO BANCO DE DADOS
const { sequelize } = require('../config/config');
// IMPORTA OS DADOS DISPONÍVEIS NO SEQUELIZE
const DataTypes = require('sequelize');

// IMPORTANDO MODELOS DE CLIENTE E FUNCIONÁRIO PARA PODER REALIZAR REALICIONAMENTO ENTRE TABELAS
const { clienteModel } = require('./clienteModel');
const { funcionarioModel } = require('./funcionarioModel');

// DIFINE MODELO DA TABELA 
const pedidoModel = sequelize.define('Pedido', //NOME DO MODELO
    {
        // CHAVE PRIMÁRIA AUTOINCREMENTADA
        id_pedido: {
            type: DataTypes.INTEGER, // TIPO DE DADO 
            autoIncrement: true,
            primaryKey: true
        },
        // CHAVE ESTRANGEIRA DO PRODUTO
        id_cliente: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: clienteModel, // INDICAÇÃO DE QUAL MODELO A CHAVE É IMPORTADA
                key: 'id_cliente' // INDICAÇÃO DE QUAL TABELA DO MODELO A CHAVE PERTENCE 
            }
        },
        // CHAVE ESTRANGEIRA DO PRODUTO
        id_funcionario: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: funcionarioModel, // INDICAÇÃO DE QUAL MODELO A CHAVE É IMPORTADA
                key: 'id_funcionario' // INDICAÇÃO DE QUAL TABELA DO MODELO A CHAVE PERTENCE 
            }
        },
        dataPedido: {
            type: DataTypes.DATE, // TIPO DE DADOS PARA UTLIZAR EM DATAS
            allowNull: true,
        },
        quantidadeItens: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        totalPedido: {
            type: DataTypes.DECIMAL, // TIPO DE DADOS DECIAMAL
            allowNull: true
        }
    },

    {
        tableName: 'Pedido', // NOME DA TABELA NO BANCO DE DADOS
        timestamps: false // DESATIVA A CRIAÇÃO AUTOMATICA DE COLUNAS
    });


// CONFIGURAÇÃO DE RELACIONAMENTO ENTRE clienteModel e pedidoModel (1 PARA MUITOS)
clienteModel.hasMany(pedidoModel, {
    foreignKey: 'id_cliente',  // CHAVE ESTRANGEIRA TABELA CLIENTE
    as: 'Pedido' // ALIAS REFERENCIANDO TABELA (APELIDO)
});

// CONFIGURAÇÃO DE RELACIONAMENTO ENTRE pedidoModel e clienteModel (MUITOS PARA 1)
pedidoModel.belongsTo(clienteModel, {
    foreignKey: 'id_cliente', // CHAVE ESTRANGEIRA TABELA CLIENTE
    as: 'Cliente' // ALIAS REFERENCIANDO TABELA (APELIDO)
});

// CONFIGURAÇÃO DE RELACIONAMENTO ENTRE funcionarioModel e pedidoMoel (1 PARA MUITOS)
funcionarioModel.hasMany(pedidoModel, {
    foreignKey: 'id_funcionario', // CHAVE ESTRANGEIRA TABELA FUNCIONÁRIO
    as: 'Pedido' // ALIAS REFERENCIANDO TABELA (APELIDO)
});

// CONFIGURAÇÃO DE RELACIONAMENTO ENTRE pedidoModel e funcionarioModel (MUITOS PARA 1)
pedidoModel.belongsTo(funcionarioModel, {
    foreignKey: 'id_funcionario', // CHAVE ESTRANGEIRA TABELA FUNCIONÁRIO
    as: 'Funcionario' // ALIAS REFERENCIANDO TABELA (APELIDO)
});

// EXPORTANDO MODELOS 
module.exports = { pedidoModel, funcionarioModel, clienteModel };