import React, { useRef, useState } from "react";
import FormInput from "./FormInput";

export default function Login() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "firstName",
      type: "type",
      placeholder: "Adewumi",
      errorMessage: "All fields are required",
      label: "First Name:",
      required: true,
    },
    {
      id: 2,
      name: "lastName",
      type: "type",
      placeholder: "Emmanuel",
      errorMessage: "All fields are required",
      label: "last Name:",
      required: true,
    },
    {
      id: 3,
      name: "username",
      type: "type",
      placeholder: "Adewumi123",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username:",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 4,
      name: "email",
      type: "email",
      placeholder: "test@gmail.com",
      errorMessage: "It should be a valid email address",
      label: "Email:",
      required: true,
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "*************",
      errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
      label: "Password:",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^$*])[a-zA-Z0-9!@#%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "**************",
      errorMessage: "Password doesn't match",
      label: "Confirm Password:",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
          
        ))}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
