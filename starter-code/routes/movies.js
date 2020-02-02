const express = require("express");
const router = express.Router();
const Movies = require("../models/Movie");

// Show data from data server

router.get("/", async (req, res) => {
  try {
    const movies = await Movies.find();
    return res.render("movies/index", { movies });
  } catch {
    console.log("ERROR");
    next();
  }
});

// Add new film to the list

router.get("/new", async (req, res, next) => {
  return res.render("movies/new");
});

// Add form

router.post("/new", async (req, res, next) => {
  const { title, genre, plot } = req.body;
  await Movies.create({
    title,
    genre,
    plot
  });
  try {
    res.redirect("/movies");
  } catch {
    return res.render("movies/new");
  }
});

// Remove movie

router.get("/:id/delete", async (req, res, next) => {
  const id = req.params.id;
  try {
    await Movies.findByIdAndRemove(id);
    return res.redirect("/movies");
  } catch {
    next();
  }
});

// Edit Movies

router.get("/:id/edit", async (req, res, next) => {
  const id = req.params.id;
  try {
    const movie = await Movies.findById(id);
    return res.render("movies/edit", { movie });
  } catch {
    next();
  }
});

router.post("/:id/edit", async (req, res, next) => {
  const { title, genre, plot } = req.body;
  console.log("hola");
  await Movies.update({
    title,
    genre,
    plot
  });
  try {
    res.redirect("/movies");
  } catch {
    next();
  }
});

// Show specific film selected

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const movies = await Movies.findById(id);
    return res.render("movies/show", { movies });
  } catch {
    next();
  }
});

module.exports = router;
