import React, { useState,useEffect } from "react";
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
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
