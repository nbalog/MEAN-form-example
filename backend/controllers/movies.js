const Movie = require("../models/movie");

exports.createMovie = (req, res, next) => {
  const movie = new Movie({
    name: req.body.name,
    quantity: req.body.quantity,
    category: req.body.category
  });
  movie
    .save()
    .then(createdMovie => {
      res.status(201).json({
        message: "Movie added successfully",
        movie: createdMovie
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Creating a movie failed!"
      });
    });
};

exports.getMovies = (req, res, next) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const movieQuery = Movie.find();
  let fetchedMovies;
  if (pageSize && currentPage) {
    movieQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
  }
  movieQuery
    .then(documents => {
      fetchedMovies = documents;
      return Movie.count();
    })
    .then(count => {
      res.status(200).json({
        message: "Movies fetched successfully!",
        movies: fetchedMovies,
        maxMovies: count
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching movies failed!"
      });
    });
};
