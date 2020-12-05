import React from "react";
import { Container, Row } from "react-bootstrap";
import "./App.css";
import BackgroundsForm from "./forms/BackgroundsForm";
import CharacterForms from "./forms/CharacterForms";
import MotivesForm from "./forms/MotivesForm";
import UsersForm from "./forms/UsersForm";
import MotivesBlacklist from "./utilities/MotivesBlacklist";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <UsersForm />

            <CharacterForms />

            <BackgroundsForm />

            <MotivesForm />

            <MotivesBlacklist />
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
