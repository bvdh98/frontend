import React from "react";
import { InputField } from "./InputField";
import "./Form.css";

const PersonForm = () => {
  return (
    <div className="input_container col-10">
      <h4>Person:</h4>
      <InputField placeholder={"first name"}></InputField>
      <InputField placeholder={"last name"}></InputField>
      <InputField placeholder={"email"}></InputField>
      <button className="btn btn-primary col-2">Add person</button>
    </div>
  );
};

export default PersonForm;
