import React from "react";

export const Tile = ({name, description}) => {
  return (
    <div className="tile-container">
      <p className="tile-title tile">{name}</p>
      {
        description.map((element,i) => {
          return <p key={i} className="tile">{element}</p>
        })
      }
    </div>
  );
};
