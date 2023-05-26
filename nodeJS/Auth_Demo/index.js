const express = require('express')
const app = express();
const User = require('./models/user')

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/authDemo')
    .then(() => {
        console.log("CONNECTION OPEN!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }))

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', async (req, res) => {
    res.send(req.body)
})

app.get('/secret', (req, res) => {
    res.send('THIS IS SECRET! YOU CANNOT SEE ME IF YOU ARE NOT LOGGED IN');
});

app.listen(3000, () => {
    console.log("SERVING THE APP!");
});