const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize({
    host: process.env.HOST, // host of the database
    database: process.env.DATABASE, // name of the DB to connect
    dialect: "postgres", // DB dialect, one of 'mysql' | 'mariadb' | 'postgres' | 'mssql'
    username: process.env.DATABASE, // DB user which will be used for connection to DB
    password: process.env.KYE, // DB user's password
  });
  module.exports = sequelize;