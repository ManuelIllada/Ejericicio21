
const { faker } = require("@faker-js/faker");
const { Comments } = require("../models")

faker.locale = "es";

module.exports = async () => {
    const comments = [];

    for (let i = 1; i < 10; i++) {
        comments.push({
            id: [i],
            content: faker.lorem.sentence(5),
            userId: faker.helpers.arrayElement([1, 2, 3, 4]),
            articleId: faker.helpers.arrayElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        });
    }

    await Comments.bulkCreate(comments);
    console.log("[Database] Se corrió el seeder de Commentarios.");
};



/* const { Comments } = require("../models")

module.exports = async () => {
    await Comments.create({
        content: "Muy buen post!",
        articleId: 3,
        userId: 1
    });
    await Comments.create({
        content: "Me pareció interesante.",
        articleId: 2,
        userId: 3
    });
    await Comments.create({
        content: "No estoy de acuerdo.",
        articleId: 1,
        userId: 2
    });
    await Comments.create({
        content: "No estoy de acuerdo.",
        articleId: 4,
        userId: 2

    });
    await Comments.create({
        content: "No estoy de acuerdo.",
        articleId: 1,
        userId: 1
    });
};
 */

