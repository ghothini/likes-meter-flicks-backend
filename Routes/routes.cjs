const express = require('express');
const routes = express.Router();
const MoviesController = require('../Controllers/MoviesController.cjs');

// Routes
routes.get('/', MoviesController.default);
routes.get('/getFlicks', MoviesController.getMovies);

module.exports = routes;
