const mysql = require('mysql')
require('dotenv').config()

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
})
connection.connect((err) => {
  if (!err) {
    console.log('Connection running successfully on ' + process.env.DB_PORT)
  } else {
    console.log('Database connection failed ' + err)
  }
})
module.exports = connection
