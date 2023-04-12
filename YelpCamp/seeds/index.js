const mongoose = require('mongoose');
const cities = require('./cities')
const { places, descriptors } = require('./seedHelpers')
const Campground = require('../models/campground')

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')
    .then(() => {
        console.log("MongoDB Connected!")
    })
    .catch(err => {
        console.log("MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

let description = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga labore,
voluptatibus totam doloremque aperiam dolor deleniti praesentium hic esse quod
quos commodi quisquam, doloribus vel illum aspernatur expedita rerum similique!
Omnis rem praesentium eius magnam, eveniet dolorum dicta provident doloremque
quod totam alias, culpa, voluptatem beatae? Beatae quia, enim aliquam
repellendus placeat ea omnis laborum at aliquid. Dolores, minima incidunt.`

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({})
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000)
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: 'https://source.unsplash.com/collection/483251',
            description,
            price
        })
        await camp.save()
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})