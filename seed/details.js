const db = require('../db')
const Detail = require('../models/detail')
const Culture = require('../models/culture')
const Person = require('../models/person')
const Places = require('../models/places')
const Entertainment = require('../models/entertainment')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

//         places: {type: String, ref: 'places'},
//         entertainment: {type: String, ref: 'entertainment'},
//         source: {type: String, required: true}

const main = async () => {

    const culture1 = await new Culture ({tribe: 'Yoruba', language: 'Yoruba', religion: 'Islam, Pentecostalism, Traditional Worship', art: {artist: 'unknown', medium: 'woodcarving, sculpture, metal work, textiles, and beadwork', image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/320382/677707/restricted'}})
    culture1.save()

    const culture2 = await new Culture ({tribe: 'Igbo', language: 'Igbo', religion: 'Catholicism, Traditional Worship',
    art: {artist: 'unknown', medium: 'traditional figures, masks, artifacts and textiles, works in metals', image: 'https://i.pinimg.com/736x/54/e2/20/54e220a39858dab2b438f8a0e56ab672.jpg'}})
    culture2.save()

    const culture3 = await new Culture ({tribe: 'Hausa', language: 'Hausa', religion: 'Islam',
    art: {artist: 'unknown', medium: 'calligraphy, basketry, leatherwork and metalwork', image: 'https://ids.si.edu/ids/deliveryService?id=NMAfA-R20001100&max=327'}})
    culture3.save()

      
    const person1 = await new Person ({name: 'Chinua Achebe', deed: 'Author, Things Fall Apart', blurb: '', image: 'unknown', source: 'unknown'})
    person1.save()

    const person2 = await new Person ({name: 'Fela Anikulakpo Kuti', deed: 'Musician, Pioneer of Afrobeat Music', blurb: '', image: 'unknown', source: 'unknown'})
    person2.save()

    const person3 = await new Person ({name: 'Chinua Achebe', deed: 'Author, Things Fall Apart', blurb: 'Islam, Pentecostalism, Traditional Worship', image: 'unknown', source: 'unknown'})
    person3.save()

    // name: {type: String, required: true},
    // location: {type: String, required: true},
    // description: {type: String, required: true}
    // image: {type: String, required: true}
    const places1 = await new Places ({name: 'Awhum Caves and Waterfalls', location: 'Udi Local Government Area, Enugu State', description: 'The Awhum Waterfall is formed out of a massive outcrop of granite rock with water flow at the top forming a stream. Some part of the waterfall is usually warm through the seasons. The Awhum waterfall is 30 metres high and is located around the Awhum Monastery.', image: '', source: 'https://en.wikipedia.org/wiki/Awhum_Waterfall'})
    places1.save() 

    const places2 = await new Places ({name: 'Osun-Osogbo Sacred Grove', location: 'Udi Local Government Area, Enugu State', description: 'The Awhum Waterfall is formed out of a massive outcrop of granite rock with water flow at the top forming a stream. Some part of the waterfall is usually warm through the seasons. The Awhum waterfall is 30 metres high and is located around the Awhum Monastery.', source: 'https://en.wikipedia.org/wiki/Awhum_Waterfall'})
    places1.save() 


    const details = [
        {culture: 'title2', person: 'title2', places: 'title2', entertainment: 'title2', source: 'https://en.wikipedia.org/wiki/Nigeria'},     
    ]
    await Detail.insertMany(details)
    console.log('Details database created!')
}

const run = async () => {
    await main()
    db.close()
}

run()