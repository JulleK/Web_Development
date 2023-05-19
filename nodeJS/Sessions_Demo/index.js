const express = require('express')
const app = express()
const session = require('express-session')

const sessionOptions = {
    secret: 'notagoodsecret',
    resave: false,
    saveUninitialized: false
}

app.use(session(sessionOptions))

app.get('/register', (req, res) => {
    const { username = "Anonymous" } = req.query;
    req.session.username = username
    res.redirect('/greet')
})

app.get('/greet', (req, res) => {
    const username = req.session.username || "Anonymous"
    res.send(`Welcome Back ${username}`)
})

app.get('/viewcount', (req, res) => {
    if (req.session.count) {
        req.session.count += 1
    } else {
        req.session.count = 1
        res.send(`You have viewed this page ${req.session.count} time`)
    }
    res.send(`You have viewed this page ${req.session.count} times`)
})

app.listen(3000, () => {
    console.log("SERVING!")
})