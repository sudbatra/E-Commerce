require('dotenv').config();

const Sequlize = require('sequelize');

const sequelize = new Sequlize(
    process.env.Name_DB,
    process.env.User_DB,
    process.env.PASSWORD_DB,
    {
        host: 'localHost',
        dialect: 'mysql',
        post:3002,
    }
);

module.exports = sequelize;