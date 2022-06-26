import React from "react";
import { useState, useEffect } from "react";

export const InputField = ({ placeholder, dispatch }) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend" />
      <input
        onChange={(e) => dispatch({ type: placeholder + " entered", payload: e.target.value })}
        type="text"
        placeholder={placeholder}
        className="form-control"
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
      />
    </div>
  );
};