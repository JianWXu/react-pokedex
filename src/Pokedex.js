import React from "react";
import Pokecard from "./Pokecard";

function Pokedex(props) {
  return (
    <div className="Pokedex">
      {props.pokemon.map(p => (
        <Pokecard
          id={p.id}
          name={p.name}
          type={p.type}
          base_experience={p.base_experience}
        />
      ))}
    </div>
  );
}
export default Pokedex;
