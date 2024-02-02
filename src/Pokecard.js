import React from "react";
import "./Pokecard.css";

const POKE_API =
  "https://raw.githubusercontent.com/" +
  "PokeAPI/sprites/master/sprites/pokemon/";

function Pokecard(props) {
  let imgSrc = `${POKE_API}${props.id}.png`;
  return (
    <div className="Pokecard">
      <h4 className="Pokecard-name">{props.name}</h4>
      <img className="Pokecard-image" src={imgSrc} />
      <div className="Pokecard-data">Type: {props.type}</div>
      <div className="Pokecard-data">EXP: {props.base_experience}</div>
    </div>
  );
}

export default Pokecard;
