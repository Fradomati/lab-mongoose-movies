const mongoose = require("mongoose");

const movies = new mongoose.Schema(
  {
    title: String,
    genre: String,
    plot: String
  },
  {
    timestamps: true
  }
);

// Aquí genero una nueva colección llamada "Movie" -> en compass será "Movies"

module.exports = mongoose.model("Movie", movies);
