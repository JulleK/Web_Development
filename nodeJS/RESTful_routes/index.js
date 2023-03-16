const { text } = require('express');
const express = require('express');
const app = express();

app.set('view engine', 'ejs')
app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
});

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.render('getpost')
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`OK, here are your ${qty} ${meat}`)
});

app.listen(3000, () => {
    console.log("Listening on port 3000")
});


