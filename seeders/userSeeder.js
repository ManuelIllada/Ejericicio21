const { Users } = require("../models")

const addUser = async (req, res) => {
    await Users.create({
        nombre: "Pancho",
        apellido: "Benitez",
        email: "pancho@benitez.com",
    });
    await Users.create({
        nombre: "Herny",
        apellido: "Alpan",
        email: "herny@alpan.com",
    });
    await Users.create({
        nombre: "Lucho",
        apellido: "Pereira",
        email: "lucho@pereira.com",
    });
    console.log("se crearon los usuarios");
};

/* addUser() */  ///////////////////////////////////////////// <- Poblar Usuarios