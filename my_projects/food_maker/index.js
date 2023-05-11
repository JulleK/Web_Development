const Express = require('express');
const Ingredient = require('./models/ingredient')
const Meal = require('./models/meal')
const mongoose = require('mongoose');
const checkIngredientForm = require('./utils/checkIngredientForm')
const checkMealForm = require('./utils/checkMealForm')
const methodOverride = require('method-override')

mongoose.connect('mongodb://127.0.0.1:27017/foodMaker')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

const app = Express()
app.set('view engine', 'ejs')
app.use(Express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.render('home')
})

// ---MEALS ROUTES---
// meals home page
app.get('/meals', async (req, res) => {
    const meals = await Meal.find()
    res.render('meals/index', { meals })
})

// new meal route
app.get('/meals/new', async (req, res) => {
    const ingredients = await Ingredient.find({})
    res.render('meals/new', { ingredients })
})

app.post('/meals', async (req, res) => {
    const checkedForm = checkMealForm(req.body)
    let { name, price, ingredients } = checkedForm

    // find ingredients in db
    for (let i = 0; i < ingredients.length; i++) {
        ingredients[i] = await Ingredient.findOne({ name: ingredients[i] })
    }

    const newMeal = new Meal({ name, price, ingredients });
    await newMeal.save();

    res.redirect('/meals');
})

// meals show route
app.get('/meals/:id', async (req, res) => {
    const { id } = req.params
    const meal = await Meal.findById(id).populate('ingredients')
    res.render('meals/show', { meal })
})

// delete route
app.delete('/meals/:id', async (req, res) => {
    const { id } = req.params
    await Meal.findByIdAndDelete(id)
    res.redirect('/meals')
})


// ---INGREDIENTS ROUTES---
// ingredients home page
app.get('/ingredients', async (req, res) => {
    const ingredients = await Ingredient.find()
    res.render('ingredients/index', { ingredients })
})

// new ingredient route
app.get('/ingredients/new', (req, res) => {
    res.render('ingredients/new')
})

app.post('/ingredients', async (req, res) => {
    const checkedForm = checkIngredientForm(req.body)
    let { name, price, available, count } = checkedForm
    // console.log(`name = ${name} | price = ${price} | available = ${available} | count = ${count}`)

    const newIngredient = new Ingredient({ name, price, available, count });
    await newIngredient.save();

    res.redirect('/ingredients');
})

// edit ingredient route
app.get('/ingredients/:id/edit', async (req, res) => {
    const { id } = req.params
    const ingredient = await Ingredient.findById(id)
    res.render('ingredients/edit', { ingredient })
})

app.put('/ingredients/:id', async (req, res) => {
    const { id } = req.params
    const checkedForm = checkIngredientForm(req.body)
    let { name, price, available, count } = checkedForm

    const ingredient = await Ingredient.findByIdAndUpdate(id, { name, price, available, count })
    res.redirect(`/ingredients/${ingredient._id}`)
})

// show route
app.get('/ingredients/:id', async (req, res) => {
    const { id } = req.params
    const ingredient = await Ingredient.findById(id)
    res.render('ingredients/show', { ingredient })
})

// delete route
app.delete('/ingredients/:id', async (req, res) => {
    const { id } = req.params
    await Ingredient.findByIdAndDelete(id)
    res.redirect('/ingredients')
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})