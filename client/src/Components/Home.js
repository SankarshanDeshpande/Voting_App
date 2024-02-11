import React from "react";
import { useNavigate } from "react-router-dom";
import img from "./undraw_voting_nvu7.svg";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  const NavigateToLogin = () => {
    navigate("/login");
  };

  const NavigateToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="body">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="bg-white p-3 rounded w-75">
          <button className="login" onClick={NavigateToLogin}>
            Login
          </button>
          <button className="register" onClick={NavigateToRegister}>
            Register
          </button>
          <div className="row">
            <div className="col-4">
              <b>
                <h2>Voting App</h2>
              </b>
              <br />
              <br />
              <p>
                Our Voting App is a digital platform designed to allow users to
                participate in various polls based on multiple topics. Users
                need to perform authentication using their Aadhaar Number to
                access the App and start Voting!
              </p>
            </div>
            <div className="col-8">
              <img src={img} width="100%" alt="" />
            </div>
          </div>
          <div className="w-25"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
