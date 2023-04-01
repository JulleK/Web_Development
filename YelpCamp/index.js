const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Campground = require('./models/campground')

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')
    .then(() => {
        console.log("MongoDB Connected!")
    })
    .catch(err => {
        console.log("MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

const app = express();
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))





app.get('/', (req, res) => {
    res.render('home')
})

app.get('/campgrounds', async (req, res) => {
    const campgrounds = await Campground.find({})
    console.log(campgrounds)
    res.render('campgrounds/index', { campgrounds })
})

app.listen(3000, () => {
    console.log('Serving on port 3000')
})