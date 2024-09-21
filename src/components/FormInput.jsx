import React, { useState } from "react";

export default function FormInput(props) {
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const [focussed, setFocussed] = useState(false);

  const handleFocus = (e) => {
    setFocussed(true);
  };
  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocussed(true)
        }
        focussed={focussed.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
}
