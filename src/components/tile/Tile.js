import React from "react";

export const Tile = ({name, description}) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {
        description.map(element => {
          return <p className="tile">{element}</p>
        })
      }
      
    </div>
  );
};
