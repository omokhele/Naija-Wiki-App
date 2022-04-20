const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Person = new Schema(
    {
        name: {type: String, required: true},
        deed: {type: String, required: true},
        blurb: {type: String, required: true},
        image: {type: String, required: true},
        source: {type: String, required: true}       
    },
    {timestamps: true}
)

module.exports = mongoose.model('person', Person)