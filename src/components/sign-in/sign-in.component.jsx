import React, { useState } from "react";

import "./sign-in.styles.scss";

const SignIn = () => {
  const [inputField, setInputField] = useState({
    Email: "",
    Password: "",
  });

  const inputsHandler = (e) => {
    setInputField({ [e.target.name]: e.target.value });
  };
  const submitButton = () => {
    alert(inputField.email);
  };

  return (
    <div className="sign-up">
      <h2>I already have an account</h2>
      <span>Sing in with your email and password</span>
      <form onSubmit={submitButton}>
        <input
          name="email"
          type="email"
          value={inputField.Email}
          onChange={inputsHandler}
          required
        />
        <label>Email</label>
        <input
          name="password"
          type="password"
          value={inputField.Password}
          onChange={inputsHandler}
          required
        />
        <label>Password</label>
        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
};

export default SignIn;
