const mongoose = require('mongoose');

const Movie = mongoose.Schema({
    title: {type: String},
    likes: {type: String, required: true},
    name: {type: String, required: true},
    sizeMediumPhoto: {type: String, required: true}
})

module.exports = mongoose.model('Movie',Movie)