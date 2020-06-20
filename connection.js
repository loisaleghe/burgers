const mysql = require("mysql2");

//Set database connection
let connectionOptions = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Slois123.",
  database: "burgers_db",
};

class DB {
  conn = null;
  constructor(config) {
    this.config = Object.assign(connectionOptions, config);
  }

  get connection() {
    if (this.conn) return this.conn;

    try {
      this.conn = mysql.createConnection(this.config).promise();
      return this.conn;
    } catch (err) {
      console.log(err);
      process.exit(1);
    }
  }
}

module.exports = DB;
