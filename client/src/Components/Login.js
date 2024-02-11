import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const [aadhar, setAadhar] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { aadhar, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate(
            "/cIwlOCkod6zV31z8UyrHbcKj6YFD1JRiDJIqwOMSEQsZtjjPfUlxs9Vg1o8ZJdZQUKz/app"
          );
        }
        if (result.data === "Developer") {
          navigate(
            "/pSHRSr2yS7wWddWoaqHEkjGfqK8QmtcKrg6MKpHRf6IXPhLX4p4Rmm14K5I3qIAroi/app"
          );
        }
        if (result.data === "The password is incorrect") {
          alert("The password is incorrect");
        }
        if (result.data === "User does not exist") {
          alert("User does not exist");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="aadhar">
              <strong>Aadhaar Number</strong>
              <p className="p">Enter 12-digit Aadhaar Number</p>
            </label>
            <input
              type="text"
              placeholder="Enter Aadhaar Number..."
              autoComplete="off"
              name="aadhar"
              className="form-control rounded-0"
              onChange={(e) => setAadhar(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="aadhar">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password..."
              name="aadhar"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
        </form>
        <p className="p">Don't Have an Account?</p>
        <Link
          to="/register"
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default Login;
