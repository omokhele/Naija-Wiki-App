const db = require('../db')
const Item = require('../models/item')

db.on('error', console.error.bind(console, 'MongoDB connection error'))


// title: {type: String, required: true},
// summary: {type: String, required: true},
// culture: {type: String, ref: 'culture'},
// people: {type: String, ref: 'people'},
// places: {type: String, ref: 'places'},
// entertainment: {type: String, ref: 'entertainment'},
// source: {type: String, required: true}
const main = async () => {
    const culture1 = await new Continent ({name: 'Africa', location: 'Eastern Hemisphere'})
    continent1.save()

    const continent2 = await new Continent ({name: 'Asia', location: 'Northern Hemisphere'})
    continent2.save()

    const continent3 = await new Continent ({name: 'Europe', location: 'Eastern Hemisphere'})
    continent3.save()

    const continent4 = await new Continent ({name: 'North America', location: 'Western Hemisphere'})
    continent4.save()

    const continent5 = await new Continent ({name: 'Oceania', location: 'Southern Hemisphere'})
    continent5.save()





const main = async () => {
    const items = [
        { title: 'Nigeria', summary: 'Nigeria (/naɪˈdʒɪəriə/), officially the Federal Republic of Nigeria, is a country in West Africa. It is the most populous country in Africa. It is geographically situated between the Sahel to the north and the Gulf of Guinea to the south in the Atlantic Ocean. It covers an area of 923,769 square kilometres (356,669 sq mi), with a population of over 211 million. Nigeria borders Niger in the north, Chad in the northeast, Cameroon in the east, and Benin in the west. Nigeria is a federal republic comprising 36 states and the Federal Capital Territory, where the capital, Abuja, is located. The largest city in Nigeria is Lagos, one of the largest metropolitan areas in the world and the second-largest in Africa. Nigeria has been home to several indigenous pre-colonial states and kingdoms since the second millennium BC, with the Nok civilization in the 15th century BC marking the first internal unification in the country. The modern state originated with British colonialization in the 19th century, taking its present territorial shape with the merging of the Southern Nigeria Protectorate and Northern Nigeria Protectorate in 1914 by Lord Lugard. The British set up administrative and legal structures while practising indirect rule through traditional chiefdoms in the Nigeria region. Nigeria became a formally independent federation on October 1, 1960',  culture: 'title2', people: 'title2', places: 'title2', entertainment: 'title2', source: 'https://en.wikipedia.org/wiki/Nigeria'},
        { title: 'title2', link: 'link2'},
    ]
    await Item.insertMany(items)
    console.log('Items database created!')
}

const run = async () => {
    await main()
    db.close()
}

run()