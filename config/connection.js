const mysql = require('mysql2')

let connection;
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL).promise()
}else{
connection = mysql
.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Slois123.',
  database: 'burgers_db'
})
.promise()
}


connection.connect()
module.exports = connection;

