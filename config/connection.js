const mysql = require('mysql2')

let connection;

connection = mysql
.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Slois123.',
  database: 'burgers_db'
})
.promise()

connection.connect()
module.exports = connection;

