const mongoose = require('mongoose')
const Schema = mongoose.Schema

const music = new Schema(
    {
        artiste: {type: String, required: true},
        song: {type: String, required: true},
        genre: {type: String, required: true}
    },
    {timestamps: true}
)

const book = new Schema(
    {
        bookTitle: {type: String, required: true},
        bookAuthor: {type: String, required: true},
        bookImage: {type: String, required: true}
    },
    {timestamps: true}
)

const film = new Schema(
    {
        filmTitle: {type: String, required: true},
        leadAct: {type: String, required: true}
    },
    {timestamps: true}
)

const Entertainment = new Schema(
    {
        music: music,
        books: book,
        film: film
        
    },
    {timestamps: true}
)

module.exports = mongoose.model('entertainment', Entertainment)