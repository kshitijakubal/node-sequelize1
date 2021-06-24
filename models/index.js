const dbConfig = require("../config/db.config");
const {Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./user")(sequelize, Sequelize)

module.exports = db;






