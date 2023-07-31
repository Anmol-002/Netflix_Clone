import React, { useRef, useState } from "react";

import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import SignUpScreen from "./SignUpScreen";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
function NewUser() {
  const [sign, setsignIn] = useState(false);
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div>
      {sign ? (
        <SignUpScreen />
      ) : (
        <div className="signupScreen">
          <form>
            <h1>Sign Up</h1>
            <input ref={emailRef} placeholder="Email" type="email" />
            <input ref={passwordRef} placeholder="Password" type="password" />
            <button type="submit" onClick={register}>
              Sign Up
            </button>
            <h4>
              <span className="gray">Old User </span>
              <span className="link" onClick={() => setsignIn(true)}>
                Sign In now.
              </span>
            </h4>
          </form>
        </div>
      )}
    </div>
  );
}

export default NewUser;
