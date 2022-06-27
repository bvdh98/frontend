import React, { useState, useEffect } from "react";
import { Container, Row, Card } from "react-bootstrap";
import "./App.css";
import PersonForm from "./components/PersonForm";
import CarForm from "./components/CarForm";
import MainContextProvider from "./components/MainContextProvider";
import PeopleContainer from "./components/PeopleContainer";
const App = () => {
  return (
    <Container>
      <Row>
        <Card className="col-10 content">
          <h1>Car User Form</h1>
          <MainContextProvider>
            <PersonForm>
            </PersonForm>
            <CarForm></CarForm>
            <PeopleContainer></PeopleContainer>
          </MainContextProvider>
        </Card>
      </Row>
    </Container>
  );
}

export default App;
