import { useState, useEffect } from "react";
import { connect } from "react-redux";
import Login from "./Login";
import Poll from "./Poll";
import "../styles/style.css";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function Dashboard(props) {
  const [loggedIn, setLoggedIn] = useState(
    typeof props.users.authedUser !== "undefined"
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      return navigate("/");
    }
  }, [loggedIn]);

  console.log(loggedIn);
  const [ready, setReady] = useState(Object.keys(props.questions).length !== 0);
  const [show,setShow] = useState(false);
  if (loggedIn) {
    const uid = props.users.authedUser;
    console.log("uid", uid);

    let answered = Object.keys(props.users[uid].answers);

    let unanswered = Object.keys(props.questions).filter(
      (q) => !answered.includes(q)
    );
      function changeDisplay(){
        setShow(!show)
      }

      function sort() {
        let sortable = [];
        for (var q of answered) {
          sortable.push([q, props.questions[q].timestamp])
        }
        sortable.sort(function(a, b) {
          return b[1] - a[1];
      });
        
        answered = sortable.map(data => data[0])
        sortable = []
        for (var q of unanswered) {
          sortable.push([q, props.questions[q].timestamp])
        }
        sortable.sort(function(a, b) {
          return b[1] - a[1];
      });
        console.log('sroted',sortable)
        unanswered = sortable.map(data => data[0])
      
      }
      sort()
    return (
      <div>
        {loggedIn ? (
          <div>
            <Navbar />
            {ready ? (
              <div>
                <div className="center"><button className="button" onClick={changeDisplay}>Change Display</button></div>
                <br></br>
                {show ? (

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
                ): (
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
                )}
               
                <br></br>
                
              </div>
            ) : (
              <h1>loading</h1>
            )}
          </div>
        ) : (
          navigate("/")
        )}
      </div>
    );
  } else {
    return <div></div>;
  }
}

const mapStateToProps = ({ users, questions }) => {
  return {
    users,
    questions,
  };
};

export default connect(mapStateToProps)(Dashboard);
