const mysql = require("mysql2");
require("dotenv").config();

const dbConfig = {
  connectionLimit: 10,
  host: process.env.HOST,
  user: process.env.USERDATA,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DBPORT,
};

module.exports.db = mysql.createConnection(dbConfig);

// Connect to the database
module.exports.db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to the database");
});
