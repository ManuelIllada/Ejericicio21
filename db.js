// Import MSQL (post - npm i msql2)
const mysql = require("mysql2/promise")
require("dotenv").config();
const DB_HOST = process.env.DB_HOST;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

// Creando la conexión con la base de datos MySQL en TablePlus
module.exports = async function (consult, values = null) {
    const connection = await mysql.createConnection({
        host: DB_HOST,
        user: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_DATABASE
    });
    const res = await connection.execute(consult, values)
    connection.end();
    return res
}

/* const db = require("./models"); */

/* module.exports = async () => {
  // Crear tablas:
  await db.sequelize.sync({ alter: true });
  console.log("[Database] ¡Las tablas fueron creadas!");

  // Ejecutar seeders (datos de prueba):
  await require("./seeders/articleSeeder")();
  console.log("[Database] ¡Los datos de prueba fueron insertados!");
}; */

