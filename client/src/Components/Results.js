import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./voting.css";
import axios from "axios";
import "reactjs-popup/dist/index.css";
import { PieChart } from "@mui/x-charts/PieChart";
import "./results.css";

const Results = () => {
  function BasicPieTwo(optionOne, optionTwo, voteOne, voteTwo) {
    return (
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: voteOne, label: optionOne },
              { id: 1, value: voteTwo, label: optionTwo },
            ],
          },
        ]}
        margin={{ top: 85 }}
        slotProps={{
          legend: {
            direction: "row",
            position: { vertical: "top", horizontal: "left" },
            padding: 2,
          },
        }}
        width={800}
        height={300}
      />
    );
  }

  function BasicPieThree(
    optionOne,
    optionTwo,
    optionThree,
    voteOne,
    voteTwo,
    voteThree
  ) {
    return (
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: voteOne, label: optionOne },
              { id: 1, value: voteTwo, label: optionTwo },
              { id: 2, value: voteThree, label: optionThree },
            ],
          },
        ]}
        margin={{ top: 85 }}
        slotProps={{
          legend: {
            direction: "row",
            position: { vertical: "top", horizontal: "left" },
            padding: 2,
          },
        }}
        width={800}
        height={300}
      />
    );
  }

  function BasicPieFour(
    optionOne,
    optionTwo,
    optionThree,
    optionFour,
    voteOne,
    voteTwo,
    voteThree,
    voteFour
  ) {
    return (
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: voteOne, label: optionOne },
              { id: 1, value: voteTwo, label: optionTwo },
              { id: 2, value: voteThree, label: optionThree },
              { id: 3, value: voteFour, label: optionFour },
            ],
          },
        ]}
        margin={{ top: 85 }}
        slotProps={{
          legend: {
            direction: "row",
            position: { vertical: "top", horizontal: "left" },
            padding: 2,
          },
        }}
        width={800}
        height={300}
      />
    );
  }

  function BasicPieFive(
    optionOne,
    optionTwo,
    optionThree,
    optionFour,
    optionFive,
    voteOne,
    voteTwo,
    voteThree,
    voteFour,
    voteFive
  ) {
    return (
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: voteOne, label: optionOne },
              { id: 1, value: voteTwo, label: optionTwo },
              { id: 2, value: voteThree, label: optionThree },
              { id: 3, value: voteFour, label: optionFour },
              { id: 4, value: voteFive, label: optionFive },
            ],
          },
        ]}
        margin={{ top: 85 }}
        slotProps={{
          legend: {
            direction: "row",
            position: { vertical: "top", horizontal: "left" },
            padding: 2,
          },
        }}
        width={800}
        height={300}
      />
    );
  }

  function BasicPieSix(
    optionOne,
    optionTwo,
    optionThree,
    optionFour,
    optionFive,
    optionSix,
    voteOne,
    voteTwo,
    voteThree,
    voteFour,
    voteFive,
    voteSix
  ) {
    return (
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: voteOne, label: optionOne },
              { id: 1, value: voteTwo, label: optionTwo },
              { id: 2, value: voteThree, label: optionThree },
              { id: 3, value: voteFour, label: optionFour },
              { id: 4, value: voteFive, label: optionFive },
              { id: 5, value: voteSix, label: optionSix },
            ],
          },
        ]}
        margin={{ top: 85 }}
        slotProps={{
          legend: {
            direction: "row",
            position: { vertical: "top", horizontal: "left" },
            padding: 2,
          },
        }}
        width={800}
        height={300}
      />
    );
  }

  const navigate = useNavigate();

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

  const [polls, setPolls] = useState([]);

  const [topic, setTopic] = useState("All");

  function changeTopic(e) {
    setTopic(e.target.value);
  }

  useEffect(() => {
    axios
      .get("http://localhost:3001/getPolls")
      .then((polls) => setPolls(polls.data))
      .catch((err) => console.log(err));
  }, []);
  if (userid && userid !== ""){
  return (
    <div className="container">
      <div className="row">
        <button className="logout1" onClick={navigateToHome}>
          Logout
        </button>
      </div>

      <div className="row r4">
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
                  {poll.title}
                  {BasicPieTwo(
                    poll.optionOne,
                    poll.optionTwo,
                    poll.voteOne,
                    poll.voteTwo
                  )}
                </div>
              );

            if (poll.optionFour === undefined)
              return (
                <div className="card">
                  {poll.title}
                  {BasicPieThree(
                    poll.optionOne,
                    poll.optionTwo,
                    poll.optionThree,
                    poll.voteOne,
                    poll.voteTwo,
                    poll.voteThree
                  )}
                </div>
              );

            if (poll.optionFive === undefined)
              return (
                <div className="card">
                  {poll.title}
                  {BasicPieFour(
                    poll.optionOne,
                    poll.optionTwo,
                    poll.optionThree,
                    poll.optionFour,
                    poll.voteOne,
                    poll.voteTwo,
                    poll.voteThree,
                    poll.voteFour
                  )}
                </div>
              );

            if (poll.optionSix === undefined)
              return (
                <div className="card">
                  {poll.title}
                  {BasicPieFive(
                    poll.optionOne,
                    poll.optionTwo,
                    poll.optionThree,
                    poll.optionFour,
                    poll.optionFive,
                    poll.voteOne,
                    poll.voteTwo,
                    poll.voteThree,
                    poll.voteFour,
                    poll.voteFive
                  )}
                </div>
              );

            if (poll.optionSix !== undefined)
              return (
                <div className="card">
                  [ {poll.topic} ]
                  <br />
                  {poll.title}
                  {BasicPieSix(
                    poll.optionOne,
                    poll.optionTwo,
                    poll.optionThree,
                    poll.optionFour,
                    poll.optionFive,
                    poll.optionSix,
                    poll.voteOne,
                    poll.voteTwo,
                    poll.voteThree,
                    poll.voteFour,
                    poll.voteFive,
                    poll.voteSix
                  )}
                </div>
              );
          }
        })}
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

export default Results;
