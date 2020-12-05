import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMinus } from "@fortawesome/free-solid-svg-icons";
import "./CharacterForms.css";
import { addCharacter, removeCharacter } from "../utilities/characterSlice";
import { useDispatch } from "react-redux";

function CharacterForms() {
  const [players, setPlayers] = useState<String[]>([]);
  const [playerName, setPlayerName] = useState("");

  const dispatch = useDispatch();

  const addPlayer = () => {
    console.log("Adding new character");

    if (playerName.length === 0) {
      alert("Character name cannot be blank");
      return;
    }

    let temp = [...players, playerName];

    setPlayers(temp);

    setPlayerName("");

    dispatch(addCharacter(temp));
  };

  const removePlayerFromList = (index: number) => {
    let temp = [...players];
    temp.splice(index, 1);
    setPlayers(temp);

    dispatch(removeCharacter(temp));
  };

  return (
    <div className="UsersForm">
      <header className="UsersForm-header">
        <h1>Create Your Characters' Names</h1>
      </header>
      <div className="playerForm">
        <Form>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter Character name"
              onChange={(e) => setPlayerName(e.target.value)}
              value={playerName}
            />
          </Form.Group>
        </Form>
      </div>

      <footer>
        <Button type="primary" onClick={addPlayer}>
          Add Character
        </Button>
      </footer>

      <div className="playersList">
        {players.map((value, index) => {
          return (
            <div>
              {index + 1}) {value}
              <FontAwesomeIcon
                icon={faUserMinus}
                onClick={() => removePlayerFromList(index)}
                className="removeUserButton"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

type Player = {
  name: String;
};

export default CharacterForms;
