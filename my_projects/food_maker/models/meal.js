const mongoose = require('mongoose')

const mealSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0,
        min: 0
    },
    ingredients: {
        type: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient'
        }],
        required: true
    }
})

module.exports = mongoose.model('meal', mealSchema)
