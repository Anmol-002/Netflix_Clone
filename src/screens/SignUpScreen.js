import React, { useRef, useState } from "react";

import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import NewUser from "./NewUser";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import SignIN from "../video/signIn.png";

function SignUpScreen() {
  const [sign, setsignIn] = useState(false);
  const [emails, setemail] = useState("");
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, emails, passwordRef.current.value)
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
        <NewUser />
      ) : (
        <div className="signupScreen">
          <form>
            <h1>
              Sign In
              <img src={SignIN} className="image_signIn" />
            </h1>
            <input
              ref={emailRef}
              placeholder="Email"
              type="email"
              value={emails}
              onChange={(e) => setemail(e.target.value)}
            />
            <input ref={passwordRef} placeholder="Password" type="password" />
            <button type="submit" onClick={signIn}>
              Sign In
            </button>
            <h4>
              <span className="gray">New to Netflix? </span>
              <span className="link" onClick={() => setsignIn(true)}>
                Sign Up now.
              </span>
            </h4>
          </form>
        </div>
      )}
    </div>
  );
}

export default SignUpScreen;
