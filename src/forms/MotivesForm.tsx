import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMinus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addMotive, removeMotive } from "../utilities/MotivesSlice";

function MotivesForm() {
  const [players, setPlayers] = useState<String[]>([]);
  const [motive, setMotive] = useState("");

  const dispatch = useDispatch();

  const addMotiveLocal = () => {
    console.log("Adding new motive");

    if (motive.length === 0) {
      alert("Motive cannot be blank");
      return;
    }

    let temp = [...players, motive];

    setPlayers(temp);

    setMotive("");

    dispatch(addMotive(temp))
  };

  const removePlayerFromList = (index: number) => {
    let temp = [...players];
    temp.splice(index, 1);
    setPlayers(temp);
    dispatch(removeMotive(temp));
  };

  return (
    <div className="UsersForm">
      <header className="UsersForm-header">
        <h1>Create Characters' Motives</h1>
      </header>
      <div className="playerForm">
        <Form>
          <Form.Group>
            <Form.Control
              as="textarea"
              placeholder="Enter a motive"
              onChange={(e) => setMotive(e.target.value)}
              value={motive}
            />
          </Form.Group>
        </Form>
      </div>

      <footer>
        <Button type="primary" onClick={addMotiveLocal}>
          Add Motive
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

export default MotivesForm;
