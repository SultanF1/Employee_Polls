import { useState,useEffect } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";
function NewPoll(props) {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [loggedIn, setLoggedIn] = useState(
    typeof props.users.authedUser !== "undefined"
  );
  
  
  
      

      
      
      useEffect(() => {
       if(!loggedIn){
        return navigate('/login',{ state: { invalidPoll: false}})
       }
      
      }, [loggedIn])
  
  const authedUser = props.users.authedUser

  function handleChange(e) {
    if (e.target.id === "1") {
      setText(e.target.value);
    } else {
      setText2(e.target.value);
    }
  }
  function handleSubmit() {
    const optionOneText = text;
    const optionTwoText = text2;
    const author = authedUser;

    props.dispatch(handleAddQuestion({ optionOneText, optionTwoText, author }));
    navigate(`/home`);
  }


  return (
    <div>
      <Navbar />
      <h1>Would You Rather</h1>
      <h3 className="date">Create Your Own Poll</h3>

      <div className="form">
        <p>First option</p>
        <br></br>
        <textarea
          id="1"
          value={text}
          onChange={handleChange}
          className="textarea scroll"
          maxLength={280}
        />
        <p>Second option</p>
        <textarea
          id="2"
          value={text2}
          onChange={handleChange}
          className="textarea scroll"
          maxLength={280}
        />
        <br></br>
        <button
          onClick={handleSubmit}
          className="btn"
          type="submit"
          disabled={text === "" || text2 === ""}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
const mapStateToProps = ({questions, users}) => {
  return {
    questions,
    users,
  }
}

export default connect(mapStateToProps)(NewPoll);
