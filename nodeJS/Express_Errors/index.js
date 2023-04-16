const express = require('express');
const app = express();
// const morgan = require('morgan')

const AppError = require("./AppError")

// app.use(morgan('tiny'))

// app.use((req, res, next) => {
//     req.requestTime = Date.now()
//     console.log(req.method, req.path)
//     next();
// })

app.use('/dogs', (req, res, next) => {
    console.log("I LOVE DOGS")
    next();
})

const verifyPassword = (req, res, next) => {
    if (req.query.password === "haslo")
        next();
    // res.send("Incorrect Password!!!")
    // res.status(401)
    // throw new Error('password required!')
    throw new AppError('password required!', 401)
}

// app.use((req, res, next) => {
//     console.log("THIS IS MY FIRST MIDDLEWARE!")
//     next();
// })

app.get('/admin', (req, res) => {
    throw new AppError("You are not an admin", 403)
})

app.get('/', (req, res) => {
    res.send("Home Page!")
})

app.get('/error', (req, res) => {
    chicken.fly()
})

app.get('/dogs', (req, res) => {
    console.log(`REQUEST TIME: ${req.requestTime}`)
    res.send("Woof Woof!")
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send("COCA COLA RECIPE MONKAW :O")
})

// app.use((err, req, res, next) => {
//     console.log("*****8")
//     console.log("*****8")
//     console.log("*****8")
//     console.log()
//     next(err)
// })

app.use((err, req, res, next) => {
    const { status = 500, message = "Something Went Wrong" } = err;
    res.status(status).send(message)
})


// 404 Route
app.use((req, res) => {
    res.status(404).send('NOT FOUND!')
})

app.listen(3000, () => {
    console.log("App is running on localhost:3000")
})