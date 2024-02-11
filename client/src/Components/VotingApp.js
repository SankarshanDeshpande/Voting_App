import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./voting.css";
import axios from "axios";
import "reactjs-popup/dist/index.css";

const VotingApp = () => {
  const [totalPoll, setTotalPoll] = useState();

  function totalPolls() {
    axios
      .get("http://localhost:3001/totalPolls")
      .then((totalPoll) => setTotalPoll(totalPoll.data))
      .catch((err) => console.log(err));
    return totalPoll;
  }

  totalPolls();

  const navigate = useNavigate();

  const NavigateToResults = () => {
    navigate(
      "/tpYp326veQiDjPw18SaI7wZclgKRGJwPcDj0WMF3a8hW94b12ZLipWPdzO2LkZ2maQf/results"
    );
  };

  const [polls, setPolls] = useState([]);

  var selected = "";
  var id = "";

  const [topic, setTopic] = useState("All");

  function changeTopic(e) {
    setTopic(e.target.value);
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

  const [totalVoted, setTotalVoted] = useState(0);

  function totalVotedNumber() {
    axios
      .post("http://localhost:3001/totalVotednumber", { userid })
      .then((totalVoted) => setTotalVoted(totalVoted.data.votednumber))
      .catch((err) => console.log(err));
    return totalVoted;
  }

  totalVotedNumber();

  const handleChange = (e) => {
    selected = e.target.value;
  };

  const handleSubmit = (e, pv) => {
    e.preventDefault();
    id = e.target.value;
    var check = pv.includes(userid);
    if (check === true) {
      alert("You cannot Vote on a Poll twice!");
    } else {
      if (selected === "buttonOne") {
        axios
          .put("http://localhost:3001/updateOne", { id, userid })
          .then((polls) => console.log(polls.data))
          .catch((err) => console.log(err));
        axios
          .put("http://localhost:3001/updateVotednumber", { userid })
          .then((user) => console.log(user.data))
          .catch((err) => console.log(err));
        window.location.reload(false);
      }
      if (selected === "buttonTwo") {
        axios
          .put("http://localhost:3001/updateTwo", { id, userid })
          .then((polls) => console.log(polls.data))
          .catch((err) => console.log(err));
        axios
          .put("http://localhost:3001/updateVotednumber", { userid })
          .then((user) => console.log(user.data))
          .catch((err) => console.log(err));
        window.location.reload(false);
      }
      if (selected === "buttonThree") {
        axios
          .put("http://localhost:3001/updateThree", { id, userid })
          .then((polls) => console.log(polls.data))
          .catch((err) => console.log(err));
        axios
          .put("http://localhost:3001/updateVotednumber", { userid })
          .then((user) => console.log(user.data))
          .catch((err) => console.log(err));
        window.location.reload(false);
      }
      if (selected === "buttonFour") {
        axios
          .put("http://localhost:3001/updateFour", { id, userid })
          .then((polls) => console.log(polls.data))
          .catch((err) => console.log(err));
        axios
          .put("http://localhost:3001/updateVotednumber", { userid })
          .then((user) => console.log(user.data))
          .catch((err) => console.log(err));
        window.location.reload(false);
      }
      if (selected === "buttonFive") {
        axios
          .put("http://localhost:3001/updateFive", { id, userid })
          .then((polls) => console.log(polls.data))
          .catch((err) => console.log(err));
        axios
          .put("http://localhost:3001/updateVotednumber", { userid })
          .then((user) => console.log(user.data))
          .catch((err) => console.log(err));
        window.location.reload(false);
      }
      if (selected === "buttonSix") {
        axios
          .put("http://localhost:3001/updateSix", { id, userid })
          .then((polls) => console.log(polls.data))
          .catch((err) => console.log(err));
        axios
          .put("http://localhost:3001/updateVotednumber", { userid })
          .then((user) => console.log(user.data))
          .catch((err) => console.log(err));
        window.location.reload(false);
      }
    }

    selected = "";
    id = "";
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/getPolls")
      .then((polls) => setPolls(polls.data))
      .catch((err) => console.log(err));
  }, []);
  
  if (userid && userid !== ""){
  return (
    <div className="container">
      <div className="row r1">
        <b>Welcome, User</b>
        <button className="logout" onClick={navigateToHome}>
          Logout
        </button>
      </div>

      <div className="row r2">
        <h1>Voting App</h1>
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
                      </label>
                    </div>
                    <div className="form-check rounded-0 option">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        defaultValue="buttonOne"
                        onClick={(e) => handleChange(e)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionOne}
                      </label>
                    </div>
                    <div className="form-check rounded-0 option">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        defaultValue="buttonTwo"
                        onClick={(e) => handleChange(e)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionTwo}
                      </label>
                    </div>
                    <button
                      className="vote"
                      value={poll._id}
                      type="submit"
                      onClick={(e) => handleSubmit(e, poll.voted)}
                    >
                      Vote
                    </button>
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
                      </label>
                    </div>
                    <div className="form-check rounded-0 option">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        defaultValue="buttonOne"
                        onClick={(e) => handleChange(e)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionOne}
                      </label>
                    </div>
                    <div className="form-check rounded-0 option">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        defaultValue="buttonTwo"
                        onClick={(e) => handleChange(e)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionTwo}
                      </label>
                    </div>
                    <div className="form-check rounded-0 option">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        defaultValue="buttonThree"
                        onClick={(e) => handleChange(e)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionThree}
                      </label>
                    </div>
                    <button
                      className="vote"
                      value={poll._id}
                      type="submit"
                      onClick={(e) => handleSubmit(e, poll.voted)}
                    >
                      Vote
                    </button>
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
                      </label>
                    </div>
                    <div className="form-check rounded-0 option">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        defaultValue="buttonOne"
                        onClick={(e) => handleChange(e)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionOne}
                      </label>
                    </div>
                    <div className="form-check rounded-0 option">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        defaultValue="buttonTwo"
                        onClick={(e) => handleChange(e)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionTwo}
                      </label>
                    </div>
                    <div className="form-check rounded-0 option">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        defaultValue="buttonThree"
                        onClick={(e) => handleChange(e)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionThree}
                      </label>
                    </div>
                    <div className="form-check rounded-0 option">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        defaultValue="buttonFour"
                        onClick={(e) => handleChange(e)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionFour}
                      </label>
                    </div>
                    <button
                      className="vote"
                      value={poll._id}
                      type="submit"
                      onClick={(e) => handleSubmit(e, poll.voted)}
                    >
                      Vote
                    </button>
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
                      </label>
                    </div>
                    <div className="form-check rounded-0 option">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        defaultValue="buttonOne"
                        onClick={(e) => handleChange(e)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionOne}
                      </label>
                    </div>
                    <div className="form-check rounded-0 option">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        defaultValue="buttonTwo"
                        onClick={(e) => handleChange(e)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionTwo}
                      </label>
                    </div>
                    <div className="form-check rounded-0 option">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        defaultValue="buttonThree"
                        onClick={(e) => handleChange(e)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionThree}
                      </label>
                    </div>
                    <div className="form-check rounded-0 option">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        defaultValue="buttonFour"
                        onClick={(e) => handleChange(e)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionFour}
                      </label>
                    </div>
                    <div className="form-check rounded-0 option">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        defaultValue="buttonFive"
                        onClick={(e) => handleChange(e)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionFive}
                      </label>
                    </div>
                    <button
                      className="vote"
                      value={poll._id}
                      type="submit"
                      onClick={(e) => handleSubmit(e, poll.voted)}
                    >
                      Vote
                    </button>
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
                      </label>
                    </div>
                    <div className="form-check rounded-0 option">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        defaultValue="buttonOne"
                        onClick={(e) => handleChange(e)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionOne}
                      </label>
                    </div>
                    <div className="form-check rounded-0 option">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        defaultValue="buttonTwo"
                        onClick={(e) => handleChange(e)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionTwo}
                      </label>
                    </div>
                    <div className="form-check rounded-0 option">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        defaultValue="buttonThree"
                        onClick={(e) => handleChange(e)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionThree}
                      </label>
                    </div>
                    <div className="form-check rounded-0 option">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        defaultValue="buttonFour"
                        onClick={(e) => handleChange(e)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionFour}
                      </label>
                    </div>
                    <div className="form-check rounded-0 option">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        defaultValue="buttonFive"
                        onClick={(e) => handleChange(e)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionFive}
                      </label>
                    </div>
                    <div className="form-check rounded-0 option">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        defaultValue="buttonSix"
                        onClick={(e) => handleChange(e)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {poll.optionSix}
                      </label>
                    </div>
                    <button
                      className="vote"
                      value={poll._id}
                      type="submit"
                      onClick={(e) => handleSubmit(e, poll.voted)}
                    >
                      Vote
                    </button>
                  </form>
                </div>
              );
          }
        })}
        <button
          className="vote"
          disabled={totalPoll === totalVoted ? false : true}
          onClick={NavigateToResults}
        >
          View Results
        </button>
      </div>
    </div>
  );
      }
  else{
    return(
      <div>Error 404 Page Not Found</div>
    );
  }
};

export default VotingApp;
