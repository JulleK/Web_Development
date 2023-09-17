import "./RandomPokemon.css";

export default function RandomPokemon() {
    const pokeNumber = Math.floor(Math.random() * 150) + 1;
    const pokeImgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeNumber}.png`;
    return (
        <div className="RandomPokemon">
            <h1>Pokemon #{pokeNumber}</h1>
            <img src={pokeImgUrl} alt="" />
        </div>
    );
}
