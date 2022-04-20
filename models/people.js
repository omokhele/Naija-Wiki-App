const mongoose = require('mongoose')
const Schema = mongoose.Schema

const People = new Schema(
    {
        name: {type: String, required: true},
        field: {type: String, required: true},
        deed: {type: String, required: true}
        
    },
    {timestamps: true}
)

module.exports = mongoose.model('people',People)