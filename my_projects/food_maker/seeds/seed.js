const mongoose = require('mongoose');
const Ingredient = require('../models/ingredient')
const ingredientsData = require('./ingredients.json')

mongoose.connect('mongodb://127.0.0.1:27017/foodMaker')
    .then(() => {
        console.log("MongoDB Connected!")
    })
    .catch(err => {
        console.log("MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

const seedDB = async () => {
    await Ingredient.deleteMany({})
    for (let ingredient of ingredientsData.ingredients) {
        let { name, available, price, count } = ingredient
        const dbIngredient = new Ingredient({
            name, available, price, count
        })
        await dbIngredient.save()
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})