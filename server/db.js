const mysql = require("mysql");
require("dotenv").config;
module.exports = {
  db: mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  }),
};
