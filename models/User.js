const Sequelize = require('sequelize')
const db = require('../database/db.js')


module.exports = db.sequelize.define(
    'model',
    {
        id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
        username: {
        type: Sequelize.STRING
        },
        role: {
        type: Sequelize.STRING
        },
        email: {
        type: Sequelize.STRING
        },
        password: {
        type: Sequelize.STRING
        },
        created: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
        }
    },
    {
        timestamps: false
    }
)
