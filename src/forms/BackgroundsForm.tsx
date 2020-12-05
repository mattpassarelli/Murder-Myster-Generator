import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMinus } from "@fortawesome/free-solid-svg-icons";

function BackgroundsForm() {
  const [players, setPlayers] = useState<Background[]>([]);
  const [background, setBackground] = useState("");

  const addBackground = () => {
    console.log("Adding new character");

    if (background.length === 0) {
      alert("Backgrounds cannot be blank");
      return;
    }

    setPlayers([...players, { background: background }]);

    setBackground("");
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
        <h1>Create Characters' Backgrounds</h1>
      </header>
      <div className="playerForm">
        <Form>
          <Form.Group>
            <Form.Control
              as="textarea"
              placeholder="Enter someone's background"
              onChange={(e) => setBackground(e.target.value)}
              value={background}
            />
          </Form.Group>
        </Form>
      </div>

      <footer>
        <Button type="primary" onClick={addBackground}>
          Add Background
        </Button>
      </footer>

      <div className="playersList">
        {players.map((value, index) => {
          return (
            <div>
              {index + 1}) {value.background}
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

type Background = {
  background: String;
};

export default BackgroundsForm;
