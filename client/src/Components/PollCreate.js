import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PollCreate() {
  const [title, setTitle] = useState();
  const [topic, setTopic] = useState();
  const [optionOne, setOptionOne] = useState();
  const [optionTwo, setOptionTwo] = useState();
  const [optionThree, setOptionThree] = useState();
  const [optionFour, setOptionFour] = useState();
  const [optionFive, setOptionFive] = useState();
  const [optionSix, setOptionSix] = useState();
  const [voteOne, setVoteOne] = useState();
  const [voteTwo, setVoteTwo] = useState();
  const [voteThree, setVoteThree] = useState();
  const [voteFour, setVoteFour] = useState();
  const [voteFive, setVoteFive] = useState();
  const [voteSix, setVoteSix] = useState();
  const [total, setTotal] = useState(0);
  const [voted, setVoted] = useState([]);

  const handleOne = (e) => {
    setOptionOne(e.target.value);
    setVoteOne(0);
  };

  const handleTwo = (e) => {
    setOptionTwo(e.target.value);
    setVoteTwo(0);
  };

  const handleThree = (e) => {
    setOptionThree(e.target.value);
    setVoteThree(0);
  };

  const handleFour = (e) => {
    setOptionFour(e.target.value);
    setVoteFour(0);
  };

  const handleFive = (e) => {
    setOptionFive(e.target.value);
    setVoteFive(0);
  };

  const handleSix = (e) => {
    setOptionSix(e.target.value);
    setVoteSix(0);
  };

  const navigate = useNavigate();

  var [userid, getUserid] = useState();

  function handleUserid() {
    axios
      .get("http://localhost:3001/getCurrentUserId")
      .then((userid) => getUserid(userid.data))
      .catch((err) => console.log(err));
    return userid;
  }

  handleUserid();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/poll", {
        title,
        topic,
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
        voteSix,
        total,
        voted,
      })
      .then((result) => {
        console.log(result);
        navigate(
          "/pSHRSr2yS7wWddWoaqHEkjGfqK8QmtcKrg6MKpHRf6IXPhLX4p4Rmm14K5I3qIAroi/app"
        );
      })
      .catch((err) => console.log(err));
  };
  if (userid && userid !== ""){
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-50">
        <h6>Create Poll</h6>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="poll">
              <strong>Title</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Title...(Required)"
              autoComplete="off"
              name="poll"
              className="form-control rounded-0"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="poll">
              <strong>Category</strong>
            </label>
            <select
              name="poll"
              className="form-control rounded-0"
              onChange={(e) => setTopic(e.target.value)}
              required
            >
              <option value="">Choose Category...(Required)</option>
              <option value="Movies">Movies</option>
              <option value="Politics">Politics</option>
              <option value="Technology">Technology</option>
              <option value="Sports">Sports</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="poll">
              <strong>Options</strong>
            </label>
            <input
              type="text"
              placeholder="Option 1...(Required)"
              autoComplete="off"
              name="poll"
              className="form-control rounded-0"
              onChange={(e) => handleOne(e)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Option 2...(Required)"
              autoComplete="off"
              name="poll"
              className="form-control rounded-0"
              onChange={(e) => handleTwo(e)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Option 3..."
              autoComplete="off"
              name="poll"
              className="form-control rounded-0"
              onChange={(e) => handleThree(e)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Option 4..."
              autoComplete="off"
              name="poll"
              className="form-control rounded-0"
              onChange={(e) => handleFour(e)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Option 5..."
              autoComplete="off"
              name="poll"
              className="form-control rounded-0"
              onChange={(e) => handleFive(e)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Option 6..."
              autoComplete="off"
              name="poll"
              className="form-control rounded-0"
              onChange={(e) => handleSix(e)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Create Poll
          </button>
        </form>
      </div>
    </div>
  );
  }
  else{
    return(
      <div>Error 404 Page Not Found</div>
    );
  }
}

export default PollCreate;
