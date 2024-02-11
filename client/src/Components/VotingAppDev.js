import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./voting.css";
import axios from "axios";
import "reactjs-popup/dist/index.css";

const VotingAppDev = () => {
  const navigate = useNavigate();

  const NavigateToResults = () => {
    navigate(
      "/tpYp326veQiDjPw18SaI7wZclgKRGJwPcDj0WMF3a8hW94b12ZLipWPdzO2LkZ2maQf/results"
    );
  };

  const [polls, setPolls] = useState([]);

  const navigateToCreatePoll = () => {
    navigate(
      "/ELAdv6w7LhMmGPOByz1x0Q32rf7fQI7joV0SDJEgliM1hMIo7YLctui6z3RaPUD8yUB/create-poll"
    );
  };

  const [topic, setTopic] = useState("All");

  function changeTopic(e) {
    setTopic(e.target.value);
  }

  var s = 0;

  function Calculate(a, b) {
    if (a === 0 || b === 0) {
      s = 0;
    } else {
      s = (a / b) * 100;
    }
    return s;
  }

  var [userid, getUserid] = useState();

  function handleUserid() {
    axios
      .get("http://localhost:3001/getCurrentUserId")
      .then((userid) => getUserid(userid.data))
      .catch((err) => console.log(err));
    return userid;
  }

  function navigateToHome() {
    axios.get("http://localhost:3001/logout")
    .then((userid) => console.log(userid.data))
    .catch((err) => console.log(err));
    navigate("/home");
  };

  handleUserid();

  useEffect(() => {
    axios
      .get("http://localhost:3001/getPolls")
      .then((polls) => setPolls(polls.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="row r1">
        <b>Welcome, Admin</b>
        <button className="logout" onClick={navigateToHome}>
          Logout
        </button>
      </div>

      <div className="row r2">
        <h1>Voting App</h1>
        <button className="addpoll" onClick={navigateToCreatePoll}>
          Add New Poll
        </button>
      </div>
      <div className="row r3">
        <p>Poll Filter:</p>
        <select name="topics" value={topic} onChange={changeTopic}>
          <option value="All">All</option>
          <option value="Movies">Movies</option>
          <option value="Politics">Politics</option>
          <option value="Technology">Technology</option>
          <option value="Sports">Sports</option>
        </select>

        {polls.map((poll) => {
          if (poll.topic === topic || topic === "All") {
            if (poll.optionThree === undefined)
              return (
                <div className="card">
                  <form>
                    <div className="form-check">
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        [ {poll.topic} ]
                        <br />
                        {poll.title}
                        <br />[ {poll.total} votes ]
                      </label>
                    </div>
                    <div className="form-check rounded-0 option">
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionOne} ( {poll.voteOne} votes )
                      </label>
                      <div className="progress" role="progressbar">
                        <div
                          className="progress-bar"
                          style={{
                            width: Calculate(poll.voteOne, poll.total) + "%",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="form-check rounded-0 option">
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionTwo} ( {poll.voteTwo} votes )
                      </label>
                      <div className="progress" role="progressbar">
                        <div
                          className="progress-bar"
                          style={{
                            width: Calculate(poll.voteTwo, poll.total) + "%",
                          }}
                        ></div>
                      </div>
                    </div>
                  </form>
                </div>
              );

            if (poll.optionFour === undefined)
              return (
                <div className="card">
                  <form>
                    <div className="form-check">
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        [ {poll.topic} ]
                        <br />
                        {poll.title}
                        <br />[ {poll.total} votes ]
                      </label>
                    </div>
                    <div className="form-check rounded-0 option">
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionOne} ( {poll.voteOne} votes )
                      </label>
                      <div className="progress" role="progressbar">
                        <div
                          className="progress-bar"
                          style={{
                            width: Calculate(poll.voteOne, poll.total) + "%",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="form-check rounded-0 option">
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionTwo} ( {poll.voteTwo} votes )
                      </label>
                      <div className="progress" role="progressbar">
                        <div
                          className="progress-bar"
                          style={{
                            width: Calculate(poll.voteTwo, poll.total) + "%",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="form-check rounded-0 option">
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionThree} ( {poll.voteThree} votes )
                      </label>
                      <div className="progress" role="progressbar">
                        <div
                          className="progress-bar"
                          style={{
                            width: Calculate(poll.voteThree, poll.total) + "%",
                          }}
                        ></div>
                      </div>
                    </div>
                  </form>
                </div>
              );

            if (poll.optionFive === undefined)
              return (
                <div className="card">
                  <form>
                    <div className="form-check">
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        [ {poll.topic} ]
                        <br />
                        {poll.title}
                        <br />[ {poll.total} votes ]
                      </label>
                    </div>
                    <div className="form-check rounded-0 option">
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionOne} ( {poll.voteOne} votes )
                      </label>
                      <div className="progress" role="progressbar">
                        <div
                          className="progress-bar"
                          style={{
                            width: Calculate(poll.voteOne, poll.total) + "%",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="form-check rounded-0 option">
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionTwo} ( {poll.voteTwo} votes )
                      </label>
                      <div className="progress" role="progressbar">
                        <div
                          className="progress-bar"
                          style={{
                            width: Calculate(poll.voteTwo, poll.total) + "%",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="form-check rounded-0 option">
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionThree} ( {poll.voteThree} votes )
                      </label>
                      <div className="progress" role="progressbar">
                        <div
                          className="progress-bar"
                          style={{
                            width: Calculate(poll.voteThree, poll.total) + "%",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="form-check rounded-0 option">
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionFour} ( {poll.voteFour} votes )
                      </label>
                      <div className="progress" role="progressbar">
                        <div
                          className="progress-bar"
                          style={{
                            width: Calculate(poll.voteFour, poll.total) + "%",
                          }}
                        ></div>
                      </div>
                    </div>
                  </form>
                </div>
              );

            if (poll.optionSix === undefined)
              return (
                <div className="card">
                  <form>
                    <div className="form-check">
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        [ {poll.topic} ]
                        <br />
                        {poll.title}
                        <br />[ {poll.total} votes ]
                      </label>
                    </div>
                    <div className="form-check rounded-0 option">
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionOne} ( {poll.voteOne} votes )
                      </label>
                      <div className="progress" role="progressbar">
                        <div
                          className="progress-bar"
                          style={{
                            width: Calculate(poll.voteOne, poll.total) + "%",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="form-check rounded-0 option">
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionTwo} ( {poll.voteTwo} votes )
                      </label>
                      <div className="progress" role="progressbar">
                        <div
                          className="progress-bar"
                          style={{
                            width: Calculate(poll.voteTwo, poll.total) + "%",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="form-check rounded-0 option">
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionThree} ( {poll.voteThree} votes )
                      </label>
                      <div className="progress" role="progressbar">
                        <div
                          className="progress-bar"
                          style={{
                            width: Calculate(poll.voteThree, poll.total) + "%",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="form-check rounded-0 option">
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionFour} ( {poll.voteFour} votes )
                      </label>
                      <div className="progress" role="progressbar">
                        <div
                          className="progress-bar"
                          style={{
                            width: Calculate(poll.voteFour, poll.total) + "%",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="form-check rounded-0 option">
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionFive} ( {poll.voteFive} votes )
                      </label>
                      <div className="progress" role="progressbar">
                        <div
                          className="progress-bar"
                          style={{
                            width: Calculate(poll.voteFive, poll.total) + "%",
                          }}
                        ></div>
                      </div>
                    </div>
                  </form>
                </div>
              );

            if (poll.optionSix !== undefined)
              return (
                <div className="card">
                  <form>
                    <div className="form-check">
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        [ {poll.topic} ]
                        <br />
                        {poll.title}
                        <br />[ {poll.total} votes ]
                      </label>
                    </div>
                    <div className="form-check rounded-0 option">
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionOne} ( {poll.voteOne} votes )
                      </label>
                      <div className="progress" role="progressbar">
                        <div
                          className="progress-bar"
                          style={{
                            width: Calculate(poll.voteOne, poll.total) + "%",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="form-check rounded-0 option">
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionTwo} ( {poll.voteTwo} votes )
                      </label>
                      <div className="progress" role="progressbar">
                        <div
                          className="progress-bar"
                          style={{
                            width: Calculate(poll.voteTwo, poll.total) + "%",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="form-check rounded-0 option">
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionThree} ( {poll.voteThree} votes )
                      </label>
                      <div className="progress" role="progressbar">
                        <div
                          className="progress-bar"
                          style={{
                            width: Calculate(poll.voteThree, poll.total) + "%",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="form-check rounded-0 option">
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionFour} ( {poll.voteFour} votes )
                      </label>
                      <div className="progress" role="progressbar">
                        <div
                          className="progress-bar"
                          style={{
                            width: Calculate(poll.voteFour, poll.total) + "%",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="form-check rounded-0 option">
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionFive} ( {poll.voteFive} votes )
                      </label>
                      <div className="progress" role="progressbar">
                        <div
                          className="progress-bar"
                          style={{
                            width: Calculate(poll.voteFive, poll.total) + "%",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="form-check rounded-0 option">
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionSix} ( {poll.voteSix} votes )
                      </label>
                      <div className="progress" role="progressbar">
                        <div
                          className="progress-bar"
                          style={{
                            width: Calculate(poll.voteSix, poll.total) + "%",
                          }}
                        ></div>
                      </div>
                    </div>
                  </form>
                </div>
              );
          }
        })}
        <button className="vote" onClick={NavigateToResults}>
          View Results
        </button>
      </div>
    </div>
  );
};

export default VotingAppDev;
