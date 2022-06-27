import React from "react";
import { InputField } from "./InputField";
import "./Form.css";
import { useMainContext } from "./MainContextProvider";

const PersonForm = () => {
  const {dispatch} = useMainContext();
  return (
    <div className="input_container col-10">
      <h4>Person:</h4>
      <InputField placeholder={"first_name"}></InputField>
      <InputField placeholder={"last_name"} ></InputField>
      <InputField placeholder={"email"} ></InputField>
      <button className="btn btn-primary col-2" onClick={()=>{dispatch({type:"add person"})}}>Add person</button>
    </div>
  );
};

export default PersonForm;
