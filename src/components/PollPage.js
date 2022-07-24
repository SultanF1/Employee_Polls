import { connect } from "react-redux";
import "../styles/style.css";
import { handleAddAnswer } from "../actions/questions";
import { withRouter } from "../utils/helpers";

import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

function PollPage(props) {
  const poll = props.questions[props.id];

  const navigate = useNavigate();
  const qid = props.id;
  const url = window.location.href;
  const split = url.split("/");
  const authedUser = split[split.length - 1];
  const [done, setDone] = useState(false);
  function check() {
    if (Object.keys(props.users[authedUser].answers).includes(props.id)) {
      setDone(true);
    }
  }
  useEffect(() => {
    check();
  }, []);

  function handleSubmit(e) {
    if (e.target.id === "1") {
      const answer = "optionOne";
      props.dispatch(handleAddAnswer({ authedUser, qid, answer }));
    } else {
      const answer = "optionTwo";
      props.dispatch(handleAddAnswer({ authedUser, qid, answer }));
    }
    navigate(`/home/${authedUser}`);
  }
  const total = poll.optionOne.votes.length + poll.optionTwo.votes.length;
  return (
    <div>
      <Navbar />
      {done ? (
        <div>
          <h1>Poll by {poll.author}</h1>
          <img
            src={props.users[props.questions[qid].author].avatarURL}
            alt={`Avatar of ${poll.author}`}
            className="Bigavatar"
          />
          <div className="container">
            <div id="1" className="option1 box">
              <p>{poll.optionOne.text}</p>
              <p>Number of votes: {poll.optionOne.votes.length}</p>
              <p>Percentage: {(poll.optionOne.votes.length / total) * 100}%</p>
            </div>
            <div id="2" className="option2 box">
              <p>{poll.optionTwo.text}</p>
              <p>Number of votes: {poll.optionTwo.votes.length}</p>
              <p>Percentage: {(poll.optionTwo.votes.length / total) * 100}%</p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Poll by {poll.author}</h1>
          <img
            src={props.users[props.questions[qid].author].avatarURL}
            alt={`Avatar of ${poll.author}`}
            className="Bigavatar"
          />
          <div className="container">
            <button id="1" className="option1 box" onClick={handleSubmit}>
              {poll.optionOne.text}
            </button>
            <button id="2" className="option2 box" onClick={handleSubmit}>
              {poll.optionTwo.text}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = ({ users, questions }, props) => {
  const { id } = props.router.params;
  return {
    users,
    questions,
    id,
  };
};

export default withRouter(connect(mapStateToProps)(PollPage));
