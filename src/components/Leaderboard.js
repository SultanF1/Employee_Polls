import { connect } from "react-redux";
import "../styles/style.css";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Leaderboard(props) {
  const [loggedIn, setLoggedIn] = useState(
    typeof props.users.authedUser !== "undefined"
  );
  const navigate = useNavigate();

  console.log("entered");

  useEffect(() => {
    if (!loggedIn) {
      return navigate("/");
    }
  }, [loggedIn]);

  if (loggedIn) {
    let keys = Object.keys(props.users).filter((m) => m != "authedUser");
    

    function sort() {
      let sortable = [];
      for (var user of keys) {
        sortable.push([user, (props.users[user].questions.length+Object.keys(props.users[user].answers).length)]);
      }
      sortable.sort(function(a, b) {
        return b[1] - a[1];
    });
    
      keys = sortable.map(data => data[0])
    
    }
    sort()
    return (
      <div>
        <Navbar />
        <h1>Leaderboard</h1>
        <table id="customers">
          <tr>
            <th data-testid="user">User</th>
            <th data-testid="created">Created</th>
            <th data-testid="answered">Answered</th>
          </tr>

          {keys.map((m) => (
            <tr key={m}>
              <td>
                {props.users[m].name}
                <img
                  src={props.users[m].avatarURL}
                  alt={`Avatar of ${m}`}
                  className="avatar"
                />
              </td>

              <td>{props.users[m].questions.length}</td>
              <td>{Object.keys(props.users[m].answers).length}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  } else {
    return <div></div>;
  }
}

const mapStateToProps = ({ questions, users }) => {
  return {
    questions,
    users,
  };
};

export default connect(mapStateToProps)(Leaderboard);
