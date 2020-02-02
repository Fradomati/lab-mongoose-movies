// Unos datos desde lo que partimos....

const withDbConnection = require("../withDbConnection");
const celebrity = require("../models/celebrity");
const movie = require("../models/Movie");

withDbConnection(async () => {
  await celebrity.deleteMany();
  await celebrity.create([
    { name: "Manuel", ocuppation: "Actor", catchPhrase: "Ey, baby!" },
    { name: "Pedro", ocuppation: "Cantante", catchPhrase: "Mamma mía!" },
    { name: "Ivan", ocuppation: "Rockero", catchPhrase: "Welcome to hell" }
  ]);

  // Movies
  await movie.deleteMany();
  await movie.create([
    { title: "Pinocho", genre: "Drama", plot: "Adolescencia" },
    {
      title: "Resacón",
      genre: "Suspense",
      plot: "Grupo de amigos que pierden a uno de sus hermanos"
    },
    {
      title: "Torrente",
      genre: "Acción",
      plot: "Detective privado en busca de la justicia"
    }
  ]);
});
