import React from "react";
import { Monster } from "./Monster/Monster";
import "./Monster-List.css";

export const MonsterList = (props) => {
  const { monsters } = props;
  return (
    <div className="Monster-List">
      {monsters.map((monster) => (
        <Monster
          key={monster.id}
          name={monster.name}
          email={monster.email}
          id={monster.id}
        />
      ))}
    </div>
  );
};
