/* const db = require("../db") */

//Página Todos los Articulos
const index = async (req, res) => {
    /*     const [users] = await db("SELECT * FROM users") */
    res.render("home", /* { users } */)
}

//Página Crear Articulos
const addUserPage = (req, res) => {
    res.render("articles/articleAdd")
}

//Página editar un Articulo
const editUserPage = async (req, res) => {
    /*    const [user] = await db(`SELECT * FROM users WHERE id = "${req.params.id}"`) */
    res.render("articles/articleEdit", /* { user: user[0] } */)
}

//Insertar un Articulo
const addUserFunction = async (req, res) => {
    ///////Opcion 1 <- Más Segura
    /*    const { firstname, lastname, age } = req.body
       await db(`INSERT INTO users (firstname, lastname, age) VALUES (?, ?, ?)`, [firstname, lastname, age]) */
    ///////Opcion 2 
    /*  await db(`INSERT INTO users (firstname, lastname, age) VALUES ("${req.body.firstname}", "${req.body.lastname}", ${req.body.age})`) */
    return res.redirect("/articulos")
}

//Editar un Articulo
const editUserFunction = async (req, res) => {
    /* const { firstname, lastname, age } = req.body
    await db(`UPDATE users SET firstname = ?, lastname = ?, age = ? WHERE id = "${req.params.id}"`, [firstname, lastname, age]) */
    return res.redirect("/articulos")
}

//Eliminar un Articulo
const deleteUser = async (req, res) => {
    /* await db(`DELETE FROM users WHERE id = "${req.params.id}"`) */
    return res.redirect("/articulos")
}

module.exports = { index, addUserPage, addUserFunction, editUserPage, editUserFunction, deleteUser }