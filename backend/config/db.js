const mysql = require("mysql2");
require("dotenv").config();

// Connection Pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: "",
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
});

// Wrap pool with promise support so we can use async/await
const db = pool.promise();

module.exports = db;
