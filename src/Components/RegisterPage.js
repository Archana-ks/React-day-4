import React from "react";
import { useHistory } from "react-router-dom";

export function RegisterPage() {
  const history = useHistory();
  return (
    <div className="Router-Page">
      <div className="text-center">
        <h1>Create an Account</h1>
      </div>
      <form className="user">
        <div className="text-center">
          <input
            type="password"
            className="split-input"
            placeholder="First Name"
          />
          <input
            type="password"
            className="split-input"
            placeholder="Last Name"
          />
        </div>

        <div className=" text-center">
          <input
            type="email"
            className="input-tag"
            placeholder="Enter Email Address..."
          />
        </div>

        <div className="text-center">
          <input
            type="password"
            className="split-input"
            placeholder="Password"
          />
          <input
            type="password"
            className="split-input"
            placeholder="Retype Password"
          />
        </div>

        <div className="text-center ">
          <button className="form-button nav-color">Register Account</button>
        </div>
        <hr />
        <div className="text-center ">
          <button className="form-button gog-color">Login with Google</button>
        </div>

        <div className="text-center">
          <button className="form-button  fb-color">Login with Facebook</button>
        </div>
      </form>
      <hr />

      <div className="text-center">
        <a
          className="nav-link"
          onClick={() => {
            history.push("/password");
          }}
        >
          Forgot Password!
        </a>
      </div>
      <div className="text-center">
        <a
          className="nav-link"
          onClick={() => {
            history.push("/login");
          }}
        >
          Login-Page!
        </a>
      </div>
    </div>
  );
}
