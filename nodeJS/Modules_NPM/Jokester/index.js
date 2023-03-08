const giveJoke = require("give-me-a-joke")
const colors = require("colors")

giveJoke.getRandomDadJoke(function (joke) {
    let dash = "  -"
    for (let i = 0; i < joke.length / 2; i++) dash += " -"
    console.log(dash.america)
    console.log(`|  ${joke.rainbow}  |`)
    console.log(dash.america)
})
