const mysql = require('mysql2');

require('dotenv').config();

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "jora"
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

module.exports = connection;