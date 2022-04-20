const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Entertainment = new Schema(
    {
        music: {type: String, ref: 'music'},
        books: {type: String, ref: 'books'},
        film: {type: String, ref: 'film'}
        
    },
    {timestamps: true}
)

module.exports = mongoose.model('entertainment', Entertainment)