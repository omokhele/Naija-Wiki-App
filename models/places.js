const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Places = new Schema(
    {
        name: {type: String, required: true},
        location: {type: String, required: true},
        description: {type: String, required: true},
        image: {type: String, required: true}
        
    },
    {timestamps: true}
)

module.exports = mongoose.model('places', Places)