const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log("CONNECTION OPEN!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullName')
    .get(function () {
        return `${this.first} ${this.last}`
    })
    .set(function (value) {
        this.first = value.substr(0, value.indexOf(' '));
        this.last = value.substr(value.indexOf(' ') + 1)
    })

personSchema.pre('save', async function () {
    this.first = "Yoe";
    this.last = "Mama;";
    console.log("ABOUT TO SAVE!!!");
})
personSchema.post('save', async function () {
    console.log("JUST SAVED!!!")
})

const Person = mongoose.model('Person', personSchema);