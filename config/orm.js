const connection = require('./connection.js')

const orm = {
    selectAll: async function (tableName) {
      const sql = 'SELECT * FROM ??'
      const [rows] = await connection.query(sql, [tableName])
      return rows
    },

    insertOne: async function (tableName, colToSearch, col2ToSearch, val, val2){
        const sql = 'INSERT INTO ??(??, ??) VALUES (?,?)'
        const [rows] = await connection.query(sql, [tableName, colToSearch, col2ToSearch, val, val2])
        return rows;
    },

    updateOne: async function (tableName, colToSearch,idcol, val) {
        const sql = 'UPDATE ?? SET ? WHERE ?? = ?'
        const [rows] = await connection.query(sql, [tableName, colToSearch,idcol, val])
        return rows
    },

    findById: async function (tableName, colToSearch, idVal) {
        const sql = 'SELECT * FROM ?? WHERE ?? = ?'
        const [rows] = await connection.query(sql, [tableName,colToSearch, idVal ])
        return rows
    }

}

module.exports = orm
