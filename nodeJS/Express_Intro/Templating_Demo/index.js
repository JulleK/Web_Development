const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/public')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1
    // const isEven = false;
    // if (num % 2 === 0) isEven = true

    // res.render('random', { rand: num })
    res.render('random', { num })
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.render('subreddit', { subreddit })
})

app.get('/cats', (req, res) => {
    const cats = ['Blue', 'Rocket', 'Monty']
    res.render('cats', { cats })
})

app.listen(3000, () => {
    console.log("Server Running")
})