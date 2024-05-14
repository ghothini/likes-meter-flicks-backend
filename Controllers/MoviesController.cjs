const fs = require('fs'); //require file system object
const Movie = require('../Models/Movie')
const { type } = require('os');
const { Transform } = require('stream');

const MoviesController = {
    default: (req, res) => {
        // Show api data
        res.send('Welcome to LikeMeterMovies Backend')
    },
    getMovies: async (req, res) => {
        fetch('https://ghothini.github.io/likes-meter-flicks-developer/flicks.json')
            .then(promise => promise.json())
            .then(flicks => {
                res.json(flicks);
            }).
            catch((err) => console.log("Error"))
    }
}

module.exports = MoviesController;