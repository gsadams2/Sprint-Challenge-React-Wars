import React from "react";
import "./StarWars.css";

const Character = props => {
  return (
    <div className="main-container">
      <h1>{props.object.name}!</h1>
      <div className="attributes-container">
        <div className="attribute">
          <div>
            <h4>Height:</h4> <span>{props.object.height}</span>
          </div>
          <div>
            <h4>Mass: </h4> <span>{props.object.mass}</span>
          </div>

          <div>
            <h4>Hair Color: </h4> <span>{props.object.hair_color}</span>
          </div>
          <div>
            <h4>Skin Color: </h4> <span>{props.object.skin_color}</span>
          </div>

          <div>
            <h4>Eye Color: </h4> <span>{props.object.eye_color}</span>
          </div>
          <div>
            <h4>Birth Year: </h4> <span>{props.object.birth_year}</span>
          </div>

          <div>
            <h4>Gender </h4> <span>{props.object.gender}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
