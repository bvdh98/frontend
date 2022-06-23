import React, { useState, useEffect } from "react";
import { Container, Row, Card } from "react-bootstrap";
import "./App.css";

const API_URL = "http://localhost:3000/api/v1/people";

const getData = () => {
  return fetch(API_URL, { mode: "no-cors" }).then(res => res.data);
};

function App() {
  useEffect(() => {
    getData().then(people => console.log(people));
  }, []);
  const [people, setPeople] = useState([]);
  return (
    <Container>
      <Row>
        <Card className="col-10 content">
          <h1>Car user form</h1>
        </Card>
      </Row>
    </Container>
  );
}

export default App;
