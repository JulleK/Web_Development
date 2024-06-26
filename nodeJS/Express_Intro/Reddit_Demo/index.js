const express = require('express')
const app = express()
const path = require('path')
const redditData = require('./data.json');

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit]

    if (data) res.render('subreddit', { ...data })
    else res.render('notfound', { subreddit })
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})