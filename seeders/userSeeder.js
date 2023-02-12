const { faker } = require("@faker-js/faker");
const { Users } = require("../models")

faker.locale = "es";

module.exports = async () => {
    const users = [];

    for (let i = 1; i < 5; i++) {
        users.push({
            id: [i],
            nombre: faker.name.firstName(),
            apellido: faker.name.lastName(),
            email: faker.internet.email()
        });
    }

    await Users.bulkCreate(users);
    console.log("[Database] Se corrió el seeder de Usuarios.");
};



/* const { Users } = require("../models")

module.exports = async () => {
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
}; */