const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

const comments = [
    {
        id: 1,
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: 2,
        username: 'Skrillex',
        comment: 'HAHAHA LMAO IM DYINCK'
    },
    {
        id: 3,
        username: 'Fred',
        comment: 'I like my doggo!'
    },
    {
        id: 4,
        username: 'B1G B0Y',
        comment: 'look ma name'
    },
]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body
    comments.push({ username, comment })
    res.redirect('/comments')
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params
    const comment = comments.find(c => c.id === parseInt(id))
    res.render('comments/details', { comment })
})

app.get('/', (req, res) => {
    res.render('getpost')
})

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
});

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`OK, here are your ${qty} ${meat}`)
});

app.listen(3000, () => {
    console.log("Listening on port 3000")
});


