import React from "react";
import { InputField } from "./InputField";
import "./Form.css";

const PersonForm = ({dispatch}) => {
  return (
    <div className="input_container col-10">
      <h4>Person:</h4>
      <InputField placeholder={"first_name"} dispatch={dispatch}></InputField>
      <InputField placeholder={"last_name"} dispatch={dispatch}></InputField>
      <InputField placeholder={"email"} dispatch={dispatch}></InputField>
      <button className="btn btn-primary col-2" onClick={()=>{}}>Add person</button>
    </div>
  );
};

export default PersonForm;
