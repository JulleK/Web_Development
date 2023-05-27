const express = require('express')
const app = express();
const User = require('./models/user')
const bcrypt = require('bcrypt')
const session = require('express-session')

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
app.use(session({ secret: 'notagoodsecret' }))

app.get('/', (req, res) => {
    res.send('THIS IS THE HOME PAGE')
})

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', async (req, res) => {
    const { password, username } = req.body
    const hash = await bcrypt.hash(password, 12)
    const user = new User({
        username,
        password: hash
    })
    await user.save()
    req.session.user_id = user._id
    res.redirect('/')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username })
    if (!user) {
        return res.redirect('/login')
    }

    const validPassword = await bcrypt.compare(password, user.password)
    if (validPassword) {
        req.session.user_id = user._id
        res.redirect('/secret')
    } else {
        res.redirect('/login')
    }
})

app.get('/secret', (req, res) => {
    if (!req.session.user_id) {
        res.redirect('/login')
    }
    res.send('THIS IS SECRET! YOU CANNOT SEE ME IF YOU ARE NOT LOGGED IN');
});

app.listen(3000, () => {
    console.log("SERVING THE APP!");
});