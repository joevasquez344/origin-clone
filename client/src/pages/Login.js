import React, { useState } from "react";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <header>
        <div className="login__logo">
          <img src="" alt="" />
        </div>
        <p>Origin</p>
      </header>
      <div className="login__tabs">
        <button className="login__signInTab">Sign In</button>
        <button className="login__signUpTab">Create An Account</button>
      </div>
      <h1>Sign in with you EA Account</h1>
      <form>
        <input value={email} type="text" />
        <input value={password} type="text" />
        <div className="login__radio">
          <input type="radio" />
          <p>Keep me signed in</p>
        </div>
        <div className="login__radio">
          <input type="radio" />
          <p>Sign in as invisible</p>
        </div>
        <button>Sign In</button>
        <small>Forget your password?</small>
      </form>
    </div>
  );
};

export default login;
