const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST || "mysql-master", // Internal Docker name
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD, // This will pull from Docker ENV
  database: "pixel-artist",
  port: 3306,
});
connection.connect();

function asyncMySQL(query, params) {
  return new Promise((resolve, reject) => {
    connection.query(query, params, (error, results) => {
      if (error) {
        console.error("Database query error:", error);
        reject(error);
      }

      resolve(results);
    });
  });
}

module.exports = asyncMySQL;
