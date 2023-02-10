const db = require("../db");
const { Comments } = require("../models")

const addComments = async (req, res) => {
    await Comments.create({
        content: "Muy buen post!",
    });
    await Comments.create({
        content: "Me pareció interesante.",
    });
    await Comments.create({
        content: "No estoy de acuerdo.",
    });
};

/* addComments(); */ //////////////////////////////////////// <- Poblar     Comentario
