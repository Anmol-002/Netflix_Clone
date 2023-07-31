import React, { useState, useRef } from "react";
import SignUpScreen from "./SignUpScreen";

function LoginScreen() {
  const [signIn, setsignIn] = useState(false);

  const [hehe, sethehe] = useState(false);
  return (
    <div>
      <div className="loginScreen">
        <div className="loginScreen__backgroud">
          <img
            className="loginScreen__logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt=""
          />
          <button
            className="loginScreen__button"
            onClick={() => setsignIn(true)}
          >
            Sign In
          </button>
          <div className="loginScreen__gradient"></div>
        </div>
        <div className="loginScreen__body ">
          {signIn || hehe ? (
            <SignUpScreen />
          ) : (
            <>
              <h1>Unlimited films, TV programmes and more.</h1>
              <h2>Watch anywhere. Cancel at any time</h2>
              <h3>
                Ready to watch?Enter your email to create or restart your
                membership
              </h3>
              <div className="loginScreen__input">
                <form>
                  <button
                    className="loginScreen__getStarted"
                    onClick={() => sethehe(true)}
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
