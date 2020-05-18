import React from "react";
import "./FilterMonster.css";

export const FilterMonster = (props) => {
  return (
    <div className="filterBox">
      <input onChange={props.changeFilterText} placeholder='Filter Monster'/>
    </div>
  );
};

