const mongoose = require('mongoose')

const ingredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        default: false
    },
    price: {
        type: Number,
        default: 0,
        min: 0
    },
    count: {
        type: Number,
        default: 0,
        min: 0
    }
})

module.exports = mongoose.model('Ingredient', ingredientSchema)