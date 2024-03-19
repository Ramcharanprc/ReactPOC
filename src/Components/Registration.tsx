import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Registation() {
  return (
    <div>
      <div className="card cardWidth cardBodyColor">
        <div className="card-body cardBodyColor">
          <div className="titleText">Sign Up</div>
          <div className="underline"></div>

          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="userName"
                placeholder="User Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                placeholder="Phone Number"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div>

            <button type="submit" className="buttonStyle">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
