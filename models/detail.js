const mongoose = require('mongoose')
const Schema = mongoose.Schema

// const art = new Schema(
//     {
//         artist: {type: String, required: true},
//         medium: {type: String, required: true},
//         image: {type: String, required: true}
//     },
//     {timestamps: true}
// )

// const culture = new Schema(
//     {
//         tribe: {type: String, required: true},
//         language: {type: String, required: true},
//         religion: {type: String, required: true},
//         art: art
//     },
//     {timestamps: true}
// )


// const person = new Schema(
//     {
//         name: {type: String, required: true},
//         deed: {type: String, required: true},
//         blurb: {type: String, required: true},
//         image: {type: String, required: true},
//         source: {type: String, required: true}       
//     },
//     {timestamps: true}
// )


// const places = new Schema(
//     {
//         name: {type: String, required: true},
//         location: {type: String, required: true},
//         description: {type: String, required: true},
//         image: {type: String, required: true}
        
//     },
//     {timestamps: true}
// )


// const music = new Schema(
//     {
//         artiste: {type: String, required: true},
//         song: {type: String, required: true},
//         genre: {type: String, required: true}
//     },
//     {timestamps: true}
// )

// const book = new Schema(
//     {
//         bookTitle: {type: String, required: true},
//         bookAuthor: {type: String, required: true},
//         bookImage: {type: String, required: true}
//     },
//     {timestamps: true}
// )

// const film = new Schema(
//     {
//         filmTitle: {type: String, required: true},
//         leadAct: {type: String, required: true}
//     },
//     {timestamps: true}
// )

// const entertainment = new Schema(
//     {
//         music: music,
//         books: book,
//         film: film
        
//     },
//     {timestamps: true}
// )


// const Detail = new Schema(
//     { 
//         culture: culture,
//         people: person,
//         places: places,
//         entertainment: entertainment
//     },
//     {timestamps: true}
// )

const Detail = new Schema(
    { 
        book: {type: String, required: true},
        blurb: {type: String, required: true},
        bookImage: {type: String, required: true},
        author: {type: String, required: true},
        bio: {type: String, required: true},
        authorImage: {type: String, required: true}
    },
    {timestamps: true}
)

module.exports = mongoose.model('details', Detail)