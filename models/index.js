const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE, // Ej: hack_academy_db
  process.env.DB_USERNAME, // Ej: root
  process.env.DB_PASSWORD, // Ej: root
  {
    host: process.env.DB_HOST, // Ej: 127.0.0.1
    dialect: process.env.DB_CONNECTION, // Ej: mysql
    logging: false, // Para que no aparezcan mensajes en consola.
  }
);

const Users = require("./User");
const Comments = require("./Comment");
const Articles = require("./Article");

Users.initModel(sequelize);
Comments.initModel(sequelize);
Articles.initModel(sequelize);
// sequelize.sync({ force: true });
/**
 * Luego de definir los modelos, se pueden establecer relaciones entre los
 * mismos (usando métodos como belongsTo, hasMany y belongsToMany)...
 */

/* HasOne 
BelongsTo 
HasMany 
BelongsToMany  */

/* User 1 -> N Article */
/* Article 1 -> 1 Usuario */
Users.hasMany(Articles);
Articles.belongsTo(Users);

/* Comment 1 -> 1 Usuario */
/* User 1 -> N Comments  */
Users.hasMany(Comments);
Comments.belongsTo(Users);

/* Article 1 -> N Comments  */
/* Comment 1 -> 1 Article */
Articles.hasMany(Comments);
Comments.belongsTo(Articles);

module.exports = {
  sequelize,
  Users,
  Comments,
  Articles,
};
