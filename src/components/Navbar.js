import { Link } from "react-router-dom";
import "../styles/style.css";
function Navbar(props) {
  const url = window.location.href;
  const split = url.split("/");
  const uid = split[split.length - 1];
  return (
    <nav className="nav">
      <ul>
        <li className="left" data-testid="home">
          <Link to={`/home/${uid}`}>Home</Link>
        </li>
        <li className="left" data-testid="new">
          <Link to={`/new/${uid}`}>New Poll</Link>
        </li>
        <li className="left" data-testid="leaderboard">
          <Link to={`/leaderboard/${uid}`}>Leaderboard</Link>
        </li>
        <li className="right" data-testid="logout">
          <Link to={`/`}>Logout</Link>
        </li>
        <li className="right">
          <Link to={`/home/${uid}`}>{uid}</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
