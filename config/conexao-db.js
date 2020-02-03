const mysql  = require ('mysql')

const conexao = mysql.createConnection({
    host : '52.91.29.19',
    port :3306,
    user: 'isa',
    password:'127bcd',
    database: 'brabank'

})

module.exports = conexao