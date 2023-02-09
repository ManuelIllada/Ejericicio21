// Import MSQL (post - npm i msql2)
const mysql = require("mysql2/promise")

// Creando la conexión con la base de datos MySQL en TablePlus
module.exports = async function (consult, values = null) {
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "ha_e21_team4"
    });
    const res = await connection.execute(consult, values)
    connection.end();
    return res
}
