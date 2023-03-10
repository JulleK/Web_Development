const express = require('express');
const app = express();

const port = 3000;

// app.use((req, res) => {
//     // res.send("Hello Wordl")
//     // res.send({ color: 'red', fly: true })
//     res.send("<h1>This is my webpage!!</h1>")
// })

app.get('/', (req, res) => {
    res.send('This is the home page!')
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params
    res.send(`<h1>Welcome to ${subreddit} subreddit!</h1>`)
})

app.post('/cats', (req, res) => {
    res.send('POST REQUEST ON CATS, AINT NO WAY')
})

app.get('/cats', (req, res) => {
    res.send('MEOW!!')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF!')
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    res.send(`<h1>showing results for ${q}</h1>`)
})

app.get('*', (req, res) => {
    res.send(`I don't know that path!`)
})

app.listen(port, () => {
    console.log(`listening on port ${port}!`);
});