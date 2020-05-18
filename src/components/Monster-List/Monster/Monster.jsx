import React from "react";
import "./Monster.css";

export const Monster = (props) => {
  const { id, name, email } = props;

  return (
    <div className="Monster">
      <img src={`https://robohash.org/${id}?set=set2`} alt={name} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

