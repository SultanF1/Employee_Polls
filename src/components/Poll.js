import { useState } from "react";
import { connect } from "react-redux";
import "../styles/style.css";
import PollPage from "./PollPage";
import { useNavigate, Link } from "react-router-dom";
import { toDate } from "../utils/helpers";
function Poll(props) {
  const q = props.questions[props.id];
  const navigate = useNavigate();
  
  
  const authedUser = props.users.authedUser
  function handleSubmit() {
    navigate(`/questions/${props.id}`);
    console.log("first");
  }

  return (
    <div>
      <div className="pollBox">
        <h2>{q.author}</h2>
        <h2>{props.done}</h2>
        <p className="date">{toDate(q.timestamp)}</p>
        <button onClick={handleSubmit}>Show</button>
      </div>
    </div>
  );
}

const mapStateToProps = ({ users, questions }, { id }) => {
  return {
    users,
    questions,
    id,
  };
};
export default connect(mapStateToProps)(Poll);
