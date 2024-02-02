import React from "react";
import shuffleArray from "./PokeDivide";
import Pokecard from "./Pokecard";
import Pokedex from "./Pokedex";

let handOne = [];
let handTwo = [];

function Pokegame(props) {
  shuffleArray(props.pokemon);
  handOne = props.pokemon.slice(0, 4);
  handTwo = props.pokemon.slice(4);
  let p1Total = handOne.reduce((acc, i) => acc + i.base_experience, 0);
  let p2Total = handTwo.reduce((acc, i) => acc + i.base_experience, 0);

  return (
    <div className="PokeGame">
      <h2 className="PokeGame-1PHeader">Player 1's Hand:</h2>
      <Pokedex pokemon={handOne} />
      <b>Exp Total: {p1Total}</b>
      <h2 className="PokeGame-2PHeader">Player 2's Hand:</h2>
      <Pokedex pokemon={handTwo} />
      <b>Exp Total: {p2Total}</b>
    </div>
  );
}

Pokegame.defaultProps = {
  pokemon: [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
  ],
};

export default Pokegame;
