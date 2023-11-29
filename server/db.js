const mysql = require("mysql");
require("dotenv").config();

console.log(process.env.USERDATA);
const dbConfig = {
  host: process.env.HOST,
  user: process.env.USERDATA,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
};

const db = mysql.createConnection(dbConfig);

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to the database");
});

// Function to check if the database connection is active
function checkDatabaseConnection() {
  db.ping((err) => {
    if (err) {
      console.error("Error pinging database:", err);
      return;
    }
    console.log("Database connection is active");
  });
}

// Check database connection every 1 minute (adjust as needed)
setInterval(checkDatabaseConnection, 60000);
