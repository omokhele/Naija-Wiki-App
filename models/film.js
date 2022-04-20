const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Film = new Schema(
    {
        filmTitle: {type: String, required: true},
        leadAct: {type: String, required: true}
    },
    {timestamps: true}
)

module.exports = mongoose.model('film', Film)