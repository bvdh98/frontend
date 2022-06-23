import React from "react";

export const InputField = ({placeholder}) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend" />
      <input
        type="text"
        placeholder={placeholder}
        className="form-control"
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
      />
    </div>
  );
};
