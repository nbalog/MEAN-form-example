const express = require("express");

const MoviesController = require("../controllers/movies");

const router = express.Router();

router.post("/createMovie", MoviesController.createMovie);
router.get("/getMovies", MoviesController.getMovies);

module.exports = router;
