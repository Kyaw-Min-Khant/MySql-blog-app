const mysql = require("mysql");
require("dotenv").config();

const dbConfig = {
  host: process.env.HOST,
  user: process.env.USERDATA,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
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
