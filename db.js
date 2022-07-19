const mysql = require('mysql')

const config = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'convert',
}

const connection = mysql.createPool(config)

module.exports = connection
