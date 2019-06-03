import React from "react";
import "./StarWars.css";
import Character from "./Character";

const ListCharacters = props => {
  return (
    <div>
      <div id="characterList-container">
        {props.value.map(character => (
          <Character className="character" object={character} />
        ))}
      </div>
    </div>
  );
};

export default ListCharacters;
