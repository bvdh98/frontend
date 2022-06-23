import React, { useState, useEffect } from "react";
import { Container, Row, Card } from "react-bootstrap";
import "./App.css";
import PersonForm from "./components/PersonForm";

const API_URL = "http://localhost:3000/api/v1/people";

const getData = () => {
  const options = {
    headers: new Headers({ "content-type": "application/json" }),
    mode: "no-cors"
  };
  fetch(API_URL,options).then(res => console.log(res));
};

function App() {
  /*useEffect(() => {
    getData().then(people => console.log(people));
  }, []);*/
  getData();
  const [people, setPeople] = useState([]);
  return (
    <Container>
      <Row>
        <Card className="col-10 content">
          <h1>Car User Form</h1>
          <PersonForm></PersonForm>
        </Card>
      </Row>
    </Container>
  );
}

export default App;
