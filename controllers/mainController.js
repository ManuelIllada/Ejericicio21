const { Articles, Users } = require("../models");
const { format } = require("date-fns");
const { es } = require("date-fns/locale");

//Página Todos los Articulos
const index = async (req, res) => {
    const articulos = await Articles.findAll({
        include: Users, order: [
            ['createdAt', 'DESC']
        ]
    });
    res.render("home", { articulos, format, es });
};


module.exports = { index }