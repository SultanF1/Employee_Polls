import { Link } from "react-router-dom";
import "../styles/style.css";
import { connect } from "react-redux";
import {useState} from 'react'

function Navbar(props) {
  
  const [loggedIn, setLoggedIn] = useState(
    typeof props.users.authedUser !== "undefined"
  );
  if(loggedIn){
  const uid = props.users.authedUser;
  
  return (
    <nav className="nav">
      
      <ul>
        <li className="left" data-testid="home">
          <Link to={`/home`}>Home</Link>
        </li>
        <li className="left" data-testid="new">
          <Link to={`/add`}>New Poll</Link>
        </li>
        <li className="left" data-testid="leaderboard">
          <Link to={`/leaderboard`}>Leaderboard</Link>
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
  else{
    return(<button onClick={()=>setLoggedIn(true)} data-testid='button'></button>);
  }
}

const mapStateToProps = ({ users, questions }) => {
  return {
    users,
    questions,
    
  };
};

export default connect(mapStateToProps)(Navbar);

