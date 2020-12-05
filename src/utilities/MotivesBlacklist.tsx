import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "./characterSlice";
import { getMotives } from "./MotivesSlice";

function MotivesBlacklist() {
  const characters = useSelector(getCharacters);
  const motives = useSelector(getMotives);

  return (
    <div className="UsersForm">
      <header className="UsersForm-header">
        <h1>Blacklist motives from characters</h1>

        {characters.map((value, index) => {
          return <div>{value}</div>;
        })}

        {motives.map((value, index) => {
          return <div>{value}</div>;
        })}
      </header>
    </div>
  );
}

export default MotivesBlacklist;
