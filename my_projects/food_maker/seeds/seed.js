const mongoose = require('mongoose');
const Ingredient = require('../models/ingredient')
const Meal = require('../models/meal')
const ingredientsData = require('./ingredients.json')
const mealsData = require('./meals.json')

mongoose.connect('mongodb://127.0.0.1:27017/foodMaker')
    .then(() => {
        console.log("---DB CONNECTED---")
    })
    .catch(err => {
        console.log("MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

function randPrice() {
    const price = (Math.random() * (20 - 0.01) + 0.01).toFixed(2);
    return price
}


const seedDB = async () => {
    await Ingredient.deleteMany({})
    await Meal.deleteMany({})

    // creating ingredients
    for (let ingredient of ingredientsData.ingredients) {
        let { name, available, price, count } = ingredient
        const dbIngredient = new Ingredient({
            name, available, price, count
        })
        await dbIngredient.save()
    }

    // creating meals
    const allIngredients = await Ingredient.find()
    for (let meal of mealsData.meals) {
        const price = randPrice()
        const dbMeal = new Meal({
            name: meal,
            price: price
        })

        // add 2-5 random ingredients
        const ingredientCount = Math.floor(Math.random() * 4) + 2
        for (let i = 0; i < ingredientCount; i++) {
            let randIngredientIndex = Math.floor(Math.random() * allIngredients.length)
            let ingredient = allIngredients[randIngredientIndex]
            if (dbMeal.ingredients.includes(ingredient)) continue
            dbMeal.ingredients.push(ingredient)
            console.log(dbMeal)
            await dbMeal.save()
        }
    }
}

async function createMeal(meal) {
    const allIngredients = await Ingredient.find()

    // add 1-3 random ingredients
    const ingredientCount = Math.floor(Math.random() * 3) + 1
    for (let i = 0; i < ingredientCount; i++) {
        let randIngredientIndex = Math.floor(Math.random() * allIngredients.length)
        let ingredient = allIngredients[randIngredientIndex]
        meal.ingredients.push(ingredient)
    }
    console.log(meal)
}

seedDB().then(() => {
    mongoose.connection.close();
})
