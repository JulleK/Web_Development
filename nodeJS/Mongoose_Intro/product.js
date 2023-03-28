const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log("CONNECTION OPEN!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        min: [0, "price must be positive!"]
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
})

// productSchema.methods.getProductInfo = function () {
//     console.log(`name: ${this.name} | price: ${this.price}$`)
// }

// const Product = mongoose.model('Product', productSchema)

// const findProduct = async (productName) => {
//     const foundProduct = await Product.findOne({ name: productName })
//     foundProduct.getProductInfo()
// }
// findProduct('Mountain Bike');

// productSchema.methods.toggleOnSale = function () {
//     this.onSale = !this.onSale;
//     return this.save()
// }

// const findProduct = async () => {
//     const foundProduct = await Product.findOne({ name: 'Mountain Bike' })
//     console.log(foundProduct)
//     await foundProduct.toggleOnSale();
//     console.log(foundProduct)
// }
// findProduct();


// const bike = new Product({ name: 'Bike Gloves', price: 9.9, categories: ['sport', 'cycling', 'safety'] })
// bike.save()
//     .then(data => {
//         console.log("IT WORKED!")
//         console.log(data)
//     })
//     .catch(err => {
//         console.log("OH NO ERROR!")
//         console.log(err)
//     })

// Product.findOneAndUpdate({ name: 'Bike Gloves' }, { price: -10.99 }, { new: true, runValidators: true })
//     .then(data => {
//         console.log("IT WORKED!")
//         console.log(data)
//     })
//     .catch(err => {
//         console.log("OH NO ERROR!")
//         console.log(err)
//     })


productSchema.statics.fireSale = function () {
    return this.updateMany({}, { onSale: true, price: 0 })
}

const Product = mongoose.model('Product', productSchema)

Product.fireSale().then(res => console.log(res))