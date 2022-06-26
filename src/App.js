import React, { useState, useEffect } from "react";
import { Container, Row, Card } from "react-bootstrap";
import "./App.css";
import PersonForm from "./components/PersonForm";
import CarForm from "./components/CarForm";
import MainContext from "./components/MainContent";
import MainContent from "./components/MainContent";

// const API_URL = "http://localhost:3000/api/v1/people";

// const getData = () => {
//   const options = {
//     headers: new Headers({ "Accept": "application/json" })
//   };
//   return fetch(API_URL, options).then(res => res.json());
// };

const App = () => {
  // useEffect(() => {
  //   getData().then(people => console.log(people));
  // }, []);
  const [people, setPeople] = useState([]);
  return (
    <Container>
      <Row>
        <Card className="col-10 content">
          <h1>Car User Form</h1>
          <MainContent></MainContent>
        </Card>
      </Row>
    </Container>
  );
}

export default App;
