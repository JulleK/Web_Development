const jokes = document.querySelector('#jokes')
const button = document.querySelector('button')

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: "application/json" } }
        const res = await axios.get("https://icanhazdadjoke.com", config)
        return res.data.joke
    }
    catch {
        return "NO JOKES AVAILABLE, SORRY!"
    }
}

const addNewJoke = async () => {
    const jokeText = await getDadJoke()
    const newLi = document.createElement('li');
    newLi.innerText = jokeText
    jokes.appendChild(newLi)
}

button.addEventListener('click', addNewJoke)