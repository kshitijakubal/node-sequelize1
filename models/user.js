const Sequelize = require('sequelize');
const db = require('../models/index')

module.exports = (sequelize, Sequelize) => {
const User =  sequelize.define("users",{
        name:Sequelize.STRING,
        email:{
            type: Sequelize.STRING,
            defaultValue: "test@gmail.com"
        },
        gender:{
            type: Sequelize.STRING
        }
    });
    return User;
}

