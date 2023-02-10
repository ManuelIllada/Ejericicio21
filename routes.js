const express = require("express");
const router = express.Router();

////////////////////////////////////////// ENV
require("dotenv").config();
const DB_HOST = process.env.DB_HOST;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

///////////////////////////////////////// Controladores
const articleController = require("./controllers/articleController");

//////////////////////////////////////// DB Sequalize
const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
  logging: false,
});

class Users extends Model {}
Users.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.BIGINT,
    },
    nombre: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    apellido: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  },
  { sequelize, modelName: "user", timestamps: false, createdAt: true }
);

class Articles extends Model {}
Articles.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.BIGINT,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    content: {
      allowNull: false,
      type: DataTypes.STRING(1000),
    },
    image: {
      type: DataTypes.BLOB,
    },
    create_at: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal("(CURRENT_DATE())"),
    },
  },
  { sequelize, modelName: "article", timestamps: false }
);

class Comments extends Model {}
Comments.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.BIGINT,
    },
    content: {
      allowNull: false,
      type: DataTypes.STRING(1000),
    },
  },
  { sequelize, modelName: "comment", timestamps: false, createdAt: true }
);

//////////////////////////////////////// Relaciones de la DB

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

sequelize.sync({ alter: true }).then(function () {
  console.log("La db se ha actualizado");
});

//////////////////////////////////////// Poblando la DB

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

/* addUSer() */ ///////////////////////////////////////////// <- Crear Usuarios

const addArticle = async (req, res) => {
  await Articles.create({
    title:
      "IA de Google en tres aplicaciones: qué novedades trae la inteligencia artificial para Maps, Lens y el Traductor",
    content:
      "Vamos a explicarte qué novedades traen Google Maps, Lens y el Traductor al implementar una IA para hacerse más inteligentes. La empresa del buscador está entrando una nueva era de la inteligencia artificial con proyectos como Google Bard, y sus aplicaciones cotidianas también obtienen beneficios. Las primeras aplicaciones que van a recibir influencias de la IA son las aplicaciones de Lens, Maps y el Traductor, novedades que irán llegando en las próximas semanas. A continuación, vamos a decirte qué cosas van a mejorar en estas apps mediante la IA.",
    image: "https://i.blogs.es/5a6112/novedades-google/500_333.jpeg",
  }),
    await Articles.create({
      title:
        "En su lanzamiento, Bard respondió mal a una pregunta. Acto seguido Google perdía 100.000 millones de dólares",
      content:
        "Los errores se pagan, y Alphabet acaba de darse cuenta por las malas. La empresa matriz de Google ha perdido cerca de 100.000 millones de dólares en su capitalización bursátil. El culplable tiene nombre propio: Bard, su competidor de ChatGPT - Demasiadas dudas. La presentación esta semana de Bard ha sido demasiado ambigua y tímida. Dieron pocos detalles en su blog inicial, y el evento de ayer fue decepcionante porque apenas sí se mencionaron sus opciones y su despliegue. Los responsables de Google apenas sí dieron detalles de su chatbot conversacional, que aparecerá de forma muy limitada en prestaciones y que además previsiblemente tardará semanas en poder ser utilizado de forma completa por todos los usuarios.",
      image:
        "https://i.blogs.es/5888d7/captura-de-pantalla-2023-02-09-a-las-10.42.48/1366_2000.jpeg",
    }),
    await Articles.create({
      title:
        "La revolución del buscador de Google va con pies de plomo: de momento la firma no quiere arriesgar con Bard",
      content:
        "'Google ha celebrado hoy un evento en París en el que se esperaba que hablara con mayor detalle de Bard, su particular rival para ChatGPT. Este chatbot conversacional fue presentado esta semana con el objetivo de demostrar que en Mountain View están trabajando en evitar la amenaza planteada por Microsoft con el nuevo Bing, pero lo cierto es que el evento ha sido conservador. Bard quiere ir sobre seguro. Los responsables de Google apenas ofrecieron nuevos detalles sobre el chatbot conversacional. Confirmaron lo que ya se publicó en su blog hace unos días: estamos ante un chatbot experimental basado en LaMDA con el que es posible plantear un primer competidor para ChatGPT.",
      image:
        "https://i.blogs.es/5a546e/captura-de-pantalla-2023-02-08-a-las-14.49.16/1366_2000.jpeg",
    }),
    await Articles.create({
      title:
        "Lo último de los cocreadores de Stable Diffusion es un impresionante generador de vídeos: así es Gen-1",
      content:
        "El año pasado presenciamos la llegada de Stable Diffusion, un generador de imágenes que se sumó a otros tantos como DALL·E y Midjourney. Pero los avances en materia de inteligencia artificial no se detienen. Ahora, uno de los creadores de la primera propuesta acaba de presentar Gen-1, un modelo que despliega las capacidades algorítmicas también en vídeos. La creación de Runway, que es como se llama la startup en cuestión, es un modelo de IA generativa que transforma vídeos existentes en nuevos y permite aplicar un amplio abanico de composiciones y estilos antes de arrojar el resultado final. Por ejemplo, con esta herramienta se puede convertir el clip de unas personas caminando en muñecos de plastilina.",
      image: "https://i.blogs.es/86b699/gen-1-runway-2/1366_2000.jpeg",
    });
};

/* addArticle()  */ //////////////////////////////////////// <- Crear Articulo

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

addComments(); //////////////////////////////////////// <- Crear Comentario

/////////////////////////////////////// PÁGINAS ARTICULO

// Página Home Articulos
router.get("/", articleController.index);

// Pagina agregar Articulo
router.get("/articles/add", articleController.addArticlePage);

// Pagina editar Articulo
router.get("/articles/edit/:id", articleController.editArticlePage);

// Pagina un Articulo
router.get("/articles/:id", articleController.articlePage);

// Pagina panel Administrador
router.get("/admin", articleController.admArticulosPAge);

///////////////////////////////////////  FUNCIONES ARTICULO

// Función Agregar Articulo
router.put("/articles/add", async (req, res) => {
  await Articles.create({
    title: req.body.title,
    content: req.body.content,
    image: req.body.img,
  });
  res.redirect("/admin");
});

// Función Editar Articulo
router.patch("/articles/edit/:id", async (req, res) => {
  await Articles.update(
    {
      title: req.body.title,
      content: req.body.content,
      image: req.body.img,
    },
    {
      where: { id: req.params.id },
    }
  );
  res.redirect("/admin");
});

// Función Eliminar Articulo
router.delete("/articles/delete/:id", async (req, res) => {
  await Articles.destroy({
    where: { id: req.params.id },
  });
  res.redirect("/admin");
});

module.exports = router;
