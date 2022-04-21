const db = require('../db')
const Detail = require('../models/detail')
// const Culture = require('../models/culture')
// const Person = require('../models/person')
// const Places = require('../models/places')
// const Entertainment = require('../models/entertainment')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    // const culture1 = await new Culture ({tribe: 'Yoruba', language: 'Yoruba', religion: 'Islam, Pentecostalism, Traditional Worship', art: {artist: 'unknown', medium: 'woodcarving, sculpture, metal work, textiles, and beadwork', image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/320382/677707/restricted'}})
    // culture1.save()

    // const culture2 = await new Culture ( {tribe: 'Igbo', language: 'Igbo', religion: 'Catholicism, Traditional Worship',
    // art: {artist: 'unknown', medium: 'traditional figures, masks, artifacts and textiles, works in metals', image: 'https://i.pinimg.com/736x/54/e2/20/54e220a39858dab2b438f8a0e56ab672.jpg'}})
    // culture2.save()

    // const culture3 = await new Culture ({tribe: 'Hausa', language: 'Hausa', religion: 'Islam',
    // art: {artist: 'unknown', medium: 'calligraphy, basketry, leatherwork and metalwork', image: 'https://ids.si.edu/ids/deliveryService?id=NMAfA-R20001100&max=327'}})
    // culture3.save()

      
    // const person1 = await new Person ({name: 'Aisha Yesufu', deed: 'Nigerian activist and businesswoman', blurb: 'She co-founded the #BringBackOurGirls movement, which brings attention to the abduction of over 200 girls from a secondary school in Chibok, Nigeria on 14 April 2014, by the terrorist group Boko Haram.She has also been prominently involved in the End SARS movement against police brutality in Nigeria.', image: 'https://www.thecityceleb.com/wp-content/uploads/2020/10/Aisha-Yusuf-Biography-TheCityCeleb.Com_.jpeg', source: 'https://en.wikipedia.org/wiki/Aisha_Yesufu'})
    // person1.save()

    // const person2 = await new Person ({name: 'Fela Anikulakpo Kuti', deed: 'Musician, Pioneer of Afrobeat Music; opposed the then oppressive military regime', blurb: 'Fela Kuti, byname of Olufela Olusegun Oludotun Ransome-Kuti, also called Fela Anikulapo-Kuti, (born October 15, 1938, Abeokuta, Nigeria—died August 2, 1997, Lagos), Nigerian musician and activist who launched a modern style of music called Afro-beat, which fused American blues, jazz, and funk with traditional Yoruba music.', image: 'https://www.rollingstone.com/wp-content/uploads/2021/10/FelaKuti.jpg?resize=1800,1200&w=450', source: 'https://www.britannica.com/biography/Fela-Kuti'})
    // person2.save()

    // const person3 = await new Person ({name: 'Chinua Achebe', deed: 'Author, Things Fall Apart', blurb: 'Chinua Achebe, in full Albert Chinualumogu Achebe, (born November 16, 1930, Ogidi, Nigeria—died March 21, 2013, Boston, Massachusetts, U.S.), Nigerian novelist acclaimed for his unsentimental depictions of the social and psychological disorientation accompanying the imposition of Western customs and values upon traditional African society. ', image: 'https://static01.nyt.com/images/2013/03/23/books/23achebe_337/23achebe_337-superJumbo.jpg', source: 'https://www.britannica.com/biography/Chinua-Achebe'})
    // person3.save()


    // const places1 = await new Places ({name: 'Awhum Caves and Waterfalls', location: 'Udi Local Government Area, Enugu State', description: 'The Awhum Waterfall is formed out of a massive outcrop of granite rock with water flow at the top forming a stream. Some part of the waterfall is usually warm through the seasons. The Awhum waterfall is 30 metres high and is located around the Awhum Monastery.', image: 'https://i.pinimg.com/736x/88/f7/74/88f7743bd4d4c83f9b177d10c11df835--pond-waterfall-water-features.jpg', source: 'https://en.wikipedia.org/wiki/Awhum_Waterfall'})
    // places1.save() 

    // const places2 = await new Places ({name: 'Osun-Osogbo Sacred Grove', location: 'Osogbo, Osun State', description: 'The Osun-Osogbo Grove is several centuries old and is among the last of the sacred forests that once adjoined the edges of most Yoruba cities before extensive urbanization. In recognition of its global significance and its cultural value, the Sacred Grove was inscribed as a UNESCO World Heritage Site in 2005.', image: 'https://guardian.ng/wp-content/uploads/2017/06/Osogbo.jpg', source: 'https://en.wikipedia.org/wiki/Osun-Osogbo'})
    // places2.save() 

    // const places3 = await new Places ({name: 'Yankari Game Reserve', location: 'Bauchi State', description: `Yankari National Park is a large wildlife park located in the south-central part of Bauchi State, in northeastern Nigeria. It covers an area of about 2,244 square kilometres (866 sq mi) and is home to several natural warm water springs, as well as a wide variety of flora and fauna. Its location in the heartland of the West African savanna makes it a unique way for tourists and holidaymakers to watch wildlife in its natural habitat. Yankari was created as a game reserve in 1956, but later designated Nigeria's biggest national park in 1991. It is the most popular destination for tourists in Nigeria and, as such, plays a crucial role in the development and promotion of tourism and ecotourism in Nigeria.`, image: 'https://kiddiesafricanews.com/wp-content/uploads/2020/09/Yankari-Game-Reserve.jpg', source: 'https://en.wikipedia.org/wiki/Yankari_National_Park'})
    // places3.save() 


    // const entertainment1 = await new Entertainment ({music: {artiste: 'Wizkid', song: 'Anoti', genre: 'Afrobeats'}, books: {bookTitle: 'Half of a Yellow Sun', bookAuthor: 'Chimamanda Ngozi Adichie', bookImage: 'https://farafinabooks.files.wordpress.com/2013/04/half-of-a-yellow-sun.jpg'}, film: {filmTitle: 'A Naija Christmas', leadAct: 'Rachel Oniga'}})
    // entertainment1.save()

    // const entertainment2 = await new Entertainment ({music: {artiste: 'Davido', song: 'If', genre: 'Afrobeats'}, books: {bookTitle: 'Ake', bookAuthor: 'Wole Soyinka', bookImage: 'https://bookcraftafrica.com/public/images/newbookcovers/4377_Ake_front_cover.jpg'}, film: {filmTitle: 'Isoken', leadAct: 'Dakore Egbuson'}})
    // entertainment2.save()

    // const entertainment3 = await new Entertainment ({music: {artiste: 'Asa', song: 'IDG', genre: 'Afrobeats'}, books: {bookTitle: 'Everything good will come', bookAuthor: 'Sefi Atta', bookImage: 'https://farafinabooks.files.wordpress.com/2010/10/everythin-good-cover2.jpg'}, film: {filmTitle: `Who's the Boss`, leadAct: 'Sharon Ooja'}})
    // entertainment3.save()

    const details = [
        {culture: {tribe: 'Yoruba', language: 'Yoruba', religion: 'Islam, Pentecostalism, Traditional Worship', art: {artist: 'unknown', medium: 'woodcarving, sculpture, metal work, textiles, and beadwork', image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/320382/677707/restricted'}}, people: {name: 'Aisha Yesufu', deed: 'Nigerian activist and businesswoman', blurb: 'She co-founded the #BringBackOurGirls movement, which brings attention to the abduction of over 200 girls from a secondary school in Chibok, Nigeria on 14 April 2014, by the terrorist group Boko Haram.She has also been prominently involved in the End SARS movement against police brutality in Nigeria.', image: 'https://www.thecityceleb.com/wp-content/uploads/2020/10/Aisha-Yusuf-Biography-TheCityCeleb.Com_.jpeg', source: 'https://en.wikipedia.org/wiki/Aisha_Yesufu'}, places: {name: 'Awhum Caves and Waterfalls', location: 'Udi Local Government Area, Enugu State', description: 'The Awhum Waterfall is formed out of a massive outcrop of granite rock with water flow at the top forming a stream. Some part of the waterfall is usually warm through the seasons. The Awhum waterfall is 30 metres high and is located around the Awhum Monastery.', image: 'https://i.pinimg.com/736x/88/f7/74/88f7743bd4d4c83f9b177d10c11df835--pond-waterfall-water-features.jpg', source: 'https://en.wikipedia.org/wiki/Awhum_Waterfall'}, entertainment: {music: {artiste: 'Wizkid', song: 'Anoti', genre: 'Afrobeats'}, books: {bookTitle: 'Half of a Yellow Sun', bookAuthor: 'Chimamanda Ngozi Adichie', bookImage: 'https://farafinabooks.files.wordpress.com/2013/04/half-of-a-yellow-sun.jpg'}, film: {filmTitle: 'A Naija Christmas', leadAct: 'Rachel Oniga'}}},
        

        {culture: {tribe: 'Igbo', language: 'Igbo', religion: 'Catholicism, Traditional Worship',
        art: {artist: 'unknown', medium: 'traditional figures, masks, artifacts and textiles, works in metals', image: 'https://i.pinimg.com/736x/54/e2/20/54e220a39858dab2b438f8a0e56ab672.jpg'}}, people: {name: 'Fela Anikulakpo Kuti', deed: 'Musician, Pioneer of Afrobeat Music; opposed the then oppressive military regime', blurb: 'Fela Kuti, byname of Olufela Olusegun Oludotun Ransome-Kuti, also called Fela Anikulapo-Kuti, (born October 15, 1938, Abeokuta, Nigeria—died August 2, 1997, Lagos), Nigerian musician and activist who launched a modern style of music called Afro-beat, which fused American blues, jazz, and funk with traditional Yoruba music.', image: 'https://www.rollingstone.com/wp-content/uploads/2021/10/FelaKuti.jpg?resize=1800,1200&w=450', source: 'https://www.britannica.com/biography/Fela-Kuti'}, places: {name: 'Osun-Osogbo Sacred Grove', location: 'Osogbo, Osun State', description: 'The Osun-Osogbo Grove is several centuries old and is among the last of the sacred forests that once adjoined the edges of most Yoruba cities before extensive urbanization. In recognition of its global significance and its cultural value, the Sacred Grove was inscribed as a UNESCO World Heritage Site in 2005.', image: 'https://guardian.ng/wp-content/uploads/2017/06/Osogbo.jpg', source: 'https://en.wikipedia.org/wiki/Osun-Osogbo'}, entertainment: {music: {artiste: 'Davido', song: 'If', genre: 'Afrobeats'}, books: {bookTitle: 'Ake', bookAuthor: 'Wole Soyinka', bookImage: 'https://bookcraftafrica.com/public/images/newbookcovers/4377_Ake_front_cover.jpg'}, film: {filmTitle: 'Isoken', leadAct: 'Dakore Egbuson'}}},


        {culture: {tribe: 'Hausa', language: 'Hausa', religion: 'Islam',
        art: {artist: 'unknown', medium: 'calligraphy, basketry, leatherwork and metalwork', image: 'https://ids.si.edu/ids/deliveryService?id=NMAfA-R20001100&max=327'}}, people: {name: 'Chinua Achebe', deed: 'Author, Things Fall Apart', blurb: 'Chinua Achebe, in full Albert Chinualumogu Achebe, (born November 16, 1930, Ogidi, Nigeria—died March 21, 2013, Boston, Massachusetts, U.S.), Nigerian novelist acclaimed for his unsentimental depictions of the social and psychological disorientation accompanying the imposition of Western customs and values upon traditional African society. ', image: 'https://static01.nyt.com/images/2013/03/23/books/23achebe_337/23achebe_337-superJumbo.jpg', source: 'https://www.britannica.com/biography/Chinua-Achebe'}, places: {name: 'Yankari Game Reserve', location: 'Bauchi State', description: `Yankari National Park is a large wildlife park located in the south-central part of Bauchi State, in northeastern Nigeria. It covers an area of about 2,244 square kilometres (866 sq mi) and is home to several natural warm water springs, as well as a wide variety of flora and fauna. Its location in the heartland of the West African savanna makes it a unique way for tourists and holidaymakers to watch wildlife in its natural habitat. Yankari was created as a game reserve in 1956, but later designated Nigeria's biggest national park in 1991. It is the most popular destination for tourists in Nigeria and, as such, plays a crucial role in the development and promotion of tourism and ecotourism in Nigeria.`, image: 'https://kiddiesafricanews.com/wp-content/uploads/2020/09/Yankari-Game-Reserve.jpg', source: 'https://en.wikipedia.org/wiki/Yankari_National_Park'}, entertainment: {music: {artiste: 'Asa', song: 'IDG', genre: 'Afrobeats'}, books: {bookTitle: 'Everything good will come', bookAuthor: 'Sefi Atta', bookImage: 'https://farafinabooks.files.wordpress.com/2010/10/everythin-good-cover2.jpg'}, film: {filmTitle: `Who's the Boss`, leadAct: 'Sharon Ooja'}}}
    ]
    await Detail.insertMany(details)
    console.log('Details database created!')
}

const run = async () => {
    await main()
    db.close()
}

run()