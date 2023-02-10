const db = require("../db");

//Página Todos los Articulos
const index = async (req, res) => {
    const [articulos] = await db("SELECT * FROM articles ORDER BY create_at DESC");
    res.render("home", { articulos });
}

//Página Crear Articulos
const addArticlePage = (req, res) => {
    res.render("articleAdd");
}

//Página editar un Articulo
const editArticlePage = async (req, res) => {
    const [article] = await db(
        `SELECT * FROM articles WHERE id = ${req.params.id} `
    );
    console.log(article);
    res.render("articleEdit", { article: article[0] });
}

//Página admin de Articulos
const admArticulosPAge = async (req, res) => {
    const [articles] = await db("SELECT * FROM articles");
    const [authors] = await db("SELECT * FROM authors");
    res.render("panel-admin", { articles, authors });
}

//Insertar un Articulo
const addArticleFunction = async (req, res) => {
    ///////Opcion 1 <- Más Segura
    /*    const { firstname, lastname, age } = req.body
       await db(`INSERT INTO users (firstname, lastname, age) VALUES (?, ?, ?)`, [firstname, lastname, age]) */
    ///////Opcion 2 
    /*  await db(`INSERT INTO users (firstname, lastname, age) VALUES ("${req.body.firstname}", "${req.body.lastname}", ${req.body.age})`) */
    return res.redirect("/articulos")
}

//Editar un Articulo
const editArticleFunction = async (req, res) => {
    /* const { firstname, lastname, age } = req.body
    await db(`UPDATE users SET firstname = ?, lastname = ?, age = ? WHERE id = "${req.params.id}"`, [firstname, lastname, age]) */
    return res.redirect("/articulos")
}

//Eliminar un Articulo
const deleteArticle = async (req, res) => {
    await db(`DELETE FROM articles WHERE id = "${req.params.id}"`)
    return res.redirect("/articulos")
}

module.exports = { index, addArticlePage, addArticleFunction, editArticlePage, editArticleFunction, deleteArticle, admArticulosPAge }