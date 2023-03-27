import React from "react";
import { useHistory } from "react-router-dom";

export function LoginPage() {
  const history = useHistory();
  return (
    <div className="Router-Page">
      <div className="text-center">
        <h1> Hi Welcome Back!</h1>
      </div>
      <form className="user">
        <div className=" text-center">
          <input
            type="email"
            className="input-tag"
            placeholder="Enter Email Address..."
          />
        </div>

        <div className="text-center">
          <input type="password" className="input-tag" placeholder=" Enter Password" />
        </div>

        <div className="text-center">
          <input type="checkbox" className="checkbox-tag" />
          <label className="custom-control-label" for="customCheck">
            Remember Me
          </label>
        </div>

        <div className="text-center ">
          <button className="form-button nav-color">Login</button>
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
            history.push("/register");
          }}
        >
          Create an Account!
        </a>
      </div>
    </div>
  );
}
