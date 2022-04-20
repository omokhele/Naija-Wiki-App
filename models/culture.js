const mongoose = require('mongoose')
const Schema = mongoose.Schema

const art = new Schema(
    {
        artist: {type: String, required: true},
        medium: {type: String, required: true},
        image: {type: String, required: true}
    },
    {timestamps: true}
)

const Culture = new Schema(
    {
        tribe: {type: String, required: true},
        language: {type: String, required: true},
        religion: {type: String, required: true},
        art: art
    },
    {timestamps: true}
)

module.exports = mongoose.model('culture', Culture)