const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Music = new Schema(
    {
        artiste: {type: String, required: true},
        song: {type: String, required: true},
        genre: {type: String, required: true}
    },
    {timestamps: true}
)

module.exports = mongoose.model('music', Music)