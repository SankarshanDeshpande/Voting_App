import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Register() {
  const [aadhar, setAadhar] = useState();
  const [password, setPassword] = useState();
  const [votednumber, setVotednumber] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/registerValidate", { aadhar, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Register") {
          Register();
          function Register() {
            console.log("Register");
            axios
              .post("http://localhost:3001/register", {
                aadhar,
                password,
                votednumber,
              })
              .then((result) => {
                console.log(result);
                navigate("/login");
              })
              .catch((err) => console.log(err));
          }
        }
        if (result.data === "Please provide valid aadhaar number") {
          alert("Please provide valid aadhaar number");
        }
        if (result.data === "User already exists") {
          alert("User already exists");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h1>Register</h1>
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
            Register
          </button>
        </form>
        <p className="p">Already Have an Account?</p>
        <Link
          to="/login"
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Register;
