// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for (let i = 1; i <= 151; i++) {
    const pokeNum = document.createElement('span');

    pokeNum.innerText = `#${i}`;
    const newImg = document.createElement('img');
    newImg.src = `${baseUrl}${i}.png`

    const pokemon = document.createElement('div');
    pokemon.appendChild(newImg)
    pokemon.appendChild(pokeNum)
    pokemon.classList.add('pokemon')

    container.appendChild(pokemon);
}