const { Articles, Users } = require("../models");
const { format } = require("date-fns");
const { es } = require("date-fns/locale");

//Página admin de Articulos
const admPage = async (req, res) => {
    const articles = await Articles.findAll({ include: Users });
    res.render("panel-admin", { articles, format, es });
};

module.exports = { admPage }