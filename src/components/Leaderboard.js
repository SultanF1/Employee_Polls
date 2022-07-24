import { connect } from "react-redux";
import "../styles/style.css";
import Navbar from "./Navbar";
function Leaderboard(props) {
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

        {Object.keys(props.users).map((m) => (
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
}

const mapStateToProps = ({ users }) => {
  return {
    users,
  };
};

export default connect(mapStateToProps)(Leaderboard);
