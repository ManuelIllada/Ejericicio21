/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

DROP TABLE IF EXISTS `articles`;
CREATE TABLE `articles` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `content` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `image` blob,
  `author_id` int NOT NULL,
  `create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `articles` (`id`, `title`, `content`, `image`, `author_id`, `create_at`) VALUES
(6, 'IA de Google en tres aplicaciones: qué novedades trae la inteligencia artificial para Maps, Lens y el Traductor” ', 'Vamos a explicarte qué novedades traen Google Maps, Lens y el Traductor al implementar una IA para hacerse más inteligentes. La empresa del buscador está entrando una nueva era de la inteligencia artificial con proyectos como Google Bard, y sus aplicaciones cotidianas también obtienen beneficios. Las primeras aplicaciones que van a recibir influencias de la IA son las aplicaciones de Lens, Maps y el Traductor, novedades que irán llegando en las próximas semanas. A continuación, vamos a decirte qué cosas van a mejorar en estas apps mediante la IA.', 'https://i.blogs.es/5a6112/novedades-google/500_333.jpeg', 1, '2023-02-09 14:47:48');
INSERT INTO `articles` (`id`, `title`, `content`, `image`, `author_id`, `create_at`) VALUES
(7, 'En su lanzamiento, Bard respondió mal a una pregunta. Acto seguido Google perdía 100.000 millones de dólares', 'Los errores se pagan, y Alphabet acaba de darse cuenta por las malas. La empresa matriz de Google ha perdido cerca de 100.000 millones de dólares en su capitalización bursátil. El culplable tiene nombre propio: Bard, su competidor de ChatGPT - Demasiadas dudas. La presentación esta semana de Bard ha sido demasiado ambigua y tímida. Dieron pocos detalles en su blog inicial, y el evento de ayer fue decepcionante porque apenas sí se mencionaron sus opciones y su despliegue. Los responsables de Google apenas sí dieron detalles de su chatbot conversacional, que aparecerá de forma muy limitada en prestaciones y que además previsiblemente tardará semanas en poder ser utilizado de forma completa por todos los usuarios.', 'https://i.blogs.es/5888d7/captura-de-pantalla-2023-02-09-a-las-10.42.48/1366_2000.jpeg', 1, '2023-02-09 14:49:17');
INSERT INTO `articles` (`id`, `title`, `content`, `image`, `author_id`, `create_at`) VALUES
(8, 'La revolución del buscador de Google va con pies de plomo: de momento la firma no quiere arriesgar con Bard', 'Google ha celebrado hoy un evento en París en el que se esperaba que hablara con mayor detalle de Bard, su particular rival para ChatGPT. Este chatbot conversacional fue presentado esta semana con el objetivo de demostrar que en Mountain View están trabajando en evitar la amenaza planteada por Microsoft con el nuevo Bing, pero lo cierto es que el evento ha sido conservador. Bard quiere ir sobre seguro. Los responsables de Google apenas ofrecieron nuevos detalles sobre el chatbot conversacional. Confirmaron lo que ya se publicó en su blog hace unos días: estamos ante un chatbot experimental basado en LaMDA con el que es posible plantear un primer competidor para ChatGPT.', 'https://i.blogs.es/5a546e/captura-de-pantalla-2023-02-08-a-las-14.49.16/1366_2000.jpeg', 1, '2023-02-09 14:50:07');
INSERT INTO `articles` (`id`, `title`, `content`, `image`, `author_id`, `create_at`) VALUES
(9, 'Lo último de los cocreadores de Stable Diffusion es un impresionante generador de vídeos: así es Gen-1', 'El año pasado presenciamos la llegada de Stable Diffusion, un generador de imágenes que se sumó a otros tantos como DALL·E y Midjourney. Pero los avances en materia de inteligencia artificial no se detienen. Ahora, uno de los creadores de la primera propuesta acaba de presentar Gen-1, un modelo que despliega las capacidades algorítmicas también en vídeos. La creación de Runway, que es como se llama la startup en cuestión, es un modelo de IA generativa que transforma vídeos existentes en nuevos y permite aplicar un amplio abanico de composiciones y estilos antes de arrojar el resultado final. Por ejemplo, con esta herramienta se puede convertir el clip de unas personas caminando en muñecos de plastilina.', 'https://i.blogs.es/86b699/gen-1-runway-2/1366_2000.jpeg', 1, '2023-02-09 14:52:17');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;