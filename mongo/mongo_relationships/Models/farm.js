const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo')
    .then(() => {
        console.log("MongoDB Connected!")
    })
    .catch(err => {
        console.log("MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall']
    }
});

const Product = mongoose.model('Product', productSchema);

// Product.insertMany([
//     { name: "Goddess Melon", price: 4.99, season: 'Summer' },
//     { name: "Sugar Baby Watermelon", price: 5.99, season: 'Summer' },
//     { name: "Asparagus", price: 3.99, season: 'Spring' }
// ])

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
})

const Farm = mongoose.model('Farm', farmSchema)

const makeFarm = async () => {
    const farm = new Farm({ name: 'Full Belly Farms', city: 'Guinda, CA' })
    const melon = await Product.findOne({ name: 'Goddess Melon' })
    farm.products.push(melon)
    await farm.save()
    console.log(farm)
}

Farm.findOne({ name: 'Full Belly Farms' }).populate('products')
    .then(farm => console.log(farm))