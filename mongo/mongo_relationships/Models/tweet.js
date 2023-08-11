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

const userSchema = new Schema({
    username: String,
    age: Number
});

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
})

const User = mongoose.model('User', userSchema)
const Tweet = mongoose.model('Tweet', tweetSchema)

// const makeTweets = async () => {
//     const user = await User.findOne({ username: 'chickenFan99', age: 61 })
//     const tweet2 = new Tweet({ text: "WHOWAHOWAHO CHICKENSSS", likes: 613155 })
//     tweet2.user = user
//     user.save()
//     tweet2.save()
// }

// makeTweets()

const findTweet = async () => {
    const t = await Tweet.findOne().populate('user', 'username')
    console.log(t)
}

findTweet()