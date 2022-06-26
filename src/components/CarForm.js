import React from "react";
import { InputField } from "./InputField";
import "./Form.css";

const CarForm = ({dispatch}) => {
  return (
    <div className="input_container col-10">
      <h4>Car:</h4>
      <InputField placeholder={"Year"} dispatch={dispatch}/>
      <InputField placeholder={"Brand"} dispatch={dispatch}/>
      <InputField placeholder={"Price"} dispatch={dispatch}/>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Select Person
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item">Action</a>
        </div>
      </div>
      <button className="btn btn-primary col-2">Add Car</button>
    </div>
  );
};

export default CarForm;
