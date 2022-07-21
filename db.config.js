const mysql = require('mysql')

const config = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'convert',
  port: process.env.DB_PORT || 3306,
}

const connection = mysql.createPool(config)

module.exports = connection
