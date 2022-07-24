import { useState } from "react";
import { connect } from "react-redux";
import questions from "../reducers/questions";
import Poll from "./Poll";
import "../styles/style.css";
import { withRouter } from "../utils/helpers";
import Navbar from "./Navbar";
function Dashboard(props) {
  const [ready, setReady] = useState(Object.keys(props.questions).length !== 0);

  const url = window.location.href;
  const split = url.split("/");
  const uid = split[split.length - 1];
  const answered = Object.keys(props.users[uid].answers);

  const unanswered = Object.keys(props.questions).filter(
    (q) => !answered.includes(q)
  );

  return (
    <div>
      <Navbar />
      {ready ? (
        <div>
          <div className="bookshelf">
            <h1>New Questions</h1>
            <ol className="books-grid">
              {unanswered.map((m) => (
                <li key={m}>
                  <Poll key={m} id={m} done={false} />
                </li>
              ))}
            </ol>
          </div>
          <br></br>
          <div className="bookshelf">
            <h1>Done</h1>
            <ol className="books-grid">
              {answered.map((m) => (
                <li key={m}>
                  <Poll key={m} id={m} done={true} />
                </li>
              ))}
            </ol>
          </div>
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
}

const mapStateToProps = ({ users, questions }, props) => {
  const { authedUser } = props.router.params;
  return {
    users,
    questions,
    authedUser,
  };
};

export default withRouter(connect(mapStateToProps)(Dashboard));
