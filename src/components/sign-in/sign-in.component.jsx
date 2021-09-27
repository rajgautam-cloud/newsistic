import React, { useState } from "react";
import { useHistory } from "react-router";

import FormInput from "../form-input/form-input.component";

import { Button } from "@material-ui/core";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      auth.signInWithEmailAndPassword(email, password);
      history.push({ pathname: "/" });
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
          label="Password"
          required
        />
        <div className="buttons">
          <Button
            style={{
              backgroundColor: "#080808",
              color: "#FFF",
              marginRight: "15px",
            }}
            variant="contained"
            type="submit"
          >
            Sign in
          </Button>
          <Button
            style={{
              backgroundColor: "#4285f4",
            }}
            variant="contained"
            color="primary"
            onClick={signInWithGoogle}
            isGoogleSignIn
          >
            {" "}
            Sign in with Google{" "}
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
