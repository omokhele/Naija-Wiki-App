const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Book = new Schema(
    {
        bookTitle: {type: String, required: true},
        bookAuthor: {type: String, required: true},
        bookImage: {type: String, required: true}
    },
    {timestamps: true}
)

module.exports = mongoose.model('book', Book)