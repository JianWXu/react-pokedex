import React from "react";
import Pokecard from "./Pokecard";
import Pokedex from "./Pokedex";
import Pokegame from "./Pokegame";
import { handTwo, handOne, PokeDivide } from "./PokeDivide";

function App() {
  return (
    <div className="pokemon">
      <h1 className="pokemon-header">Pokedex</h1>
      {/* <Pokedex prop={pokeArr} /> */}
      {<Pokegame />}
    </div>
  );
}

export default App;
