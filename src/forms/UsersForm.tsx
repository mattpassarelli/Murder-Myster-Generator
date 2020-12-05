import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMinus } from "@fortawesome/free-solid-svg-icons";
import "./UsersForm.css";

function UsersForm() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [playerName, setPlayerName] = useState("");
  const [playerEmail, setPlayerEmail] = useState("");

  const addPlayer = () => {
    console.log("Adding new player");

    if (playerName.length === 0 || playerEmail.length === 0) {
      alert("Player info cannot be blank");
      return;
    }

    setPlayers([...players, { name: playerName, email: playerEmail }]);

    setPlayerEmail("");
    setPlayerName("");
  };

  const removePlayerFromList = (index: number) => {
    if (index > -1) {
      let temp = [...players];
      temp.splice(index, 1);
      setPlayers(temp);
    }
  };

  return (
    <div className="UsersForm">
      <header className="UsersForm-header">
        <h1>Who is playing?</h1>
      </header>
      <div className="playerForm">
        <Form>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter Player name"
              onChange={(e) => setPlayerName(e.target.value)}
              value={playerName}
            />

            {/* TODO: Needs Email validation */}
            <Form.Control
              type="email"
              placeholder="Enter Player email"
              onChange={(e) => setPlayerEmail(e.target.value)}
              value={playerEmail}
            />
          </Form.Group>
        </Form>
      </div>

      <footer>
        <Button type="primary" onClick={addPlayer}>
          Add Player
        </Button>
      </footer>

      <div className="playersList">
        {players.map((value, index) => {
          return (
            <div>
              {index + 1}) {value.name} | {value.email}
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
  email: String;
};

export default UsersForm;
