const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Item = new Schema(
    {
        title: {type: String, required: true},
        summary: {type: String, required: true},
        culture: {type: String, ref: 'culture'},
        people: {type: String, ref: 'people'},
        places: {type: String, ref: 'places'},
        entertainment: {type: String, ref: 'entertainment'},
        source: {type: String, required: true}
    },
    {timestamps: true}
)

module.exports = mongoose.model('items', Item)