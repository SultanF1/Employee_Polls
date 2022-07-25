import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authenticateUser } from "../actions/users";
import { useLocation } from "react-router-dom";
function ForcedLogin(props) {
  const { state } = useLocation();
  console.log(state.invalidPoll);
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    if (e.target.id === "name") {
      setName(e.target.value);
    } else {
      setPassword(e.target.value);
    }
    setSuccess(false);
  }

  function handleSubmit() {
    console.log(props);
    for (let key in props.users) {
      if (
        props.users[key].id === name &&
        props.users[key].password === password
      ) {
        setSuccess(true);
        props.dispatch(authenticateUser(name));
        break;
      }
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <h3>You need to login before being directed to the requested URL</h3>

      <br></br>
      <div className="form">
        <input
          id="name"
          value={name}
          onChange={handleChange}
          className="textarea scroll"
          placeholder="username"
          data-testid="username-input"
        />
        <br></br>
        <input
          id="password"
          value={password}
          onChange={handleChange}
          className="textarea scroll"
          placeholder="password"
          data-testid="password-input"
        />
        <br></br>

        <button onClick={handleSubmit} data-testid="submit-button">
          Sign in
        </button>
      </div>
      {success ? (
        state.invalidPoll ? (
            navigate('/error') 
        ):(
        <div data-testid="success">{navigate(-1)}</div>
        )
       
      ) : (
        <div data-testid="alert"></div>
      )}
    </div>
  );
}

const mapStateToProps = ({ users, questions }) => {
  return {
    users,
    questions,
  };
};

export default connect(mapStateToProps)(ForcedLogin);
