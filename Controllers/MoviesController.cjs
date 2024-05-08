const fs = require('fs'); //require file system object
const { type } = require('os');
const { Transform } = require('stream');

const MoviesController = {
    default: (req, res) => {
        // Show api data
        res.send('Welcome to LikeMeterMovies Backend')
    },
    getMovies: (req, res) => {
        fs.readFile("movie_list.json", 'utf8', (err, moviesArr) => {
            moviesArr = JSON.parse(moviesArr);
            let filteredPictureMovies = [];
            let needFixingPictureMovies = [];
            moviesArr.forEach((movie) => {
                if (movie.sizeMediumPhoto) {
                    filteredPictureMovies.push(movie);
                    return;
                }
                // needFixingPictureMovies.push(movie);
            })
            // fs.writeFile(`pictures-errors.json`, `${JSON.stringify(needFixingPictureMovies)}`, (err) => { })
            res.end(JSON.stringify(filteredPictureMovies)); // you can also use res.send()
        });
    }
}

module.exports = MoviesController;