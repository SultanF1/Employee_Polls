import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import Dashboard from "./Dashboard";
import NewPoll from "./NewPoll";
import { Routes, Route } from "react-router-dom";
import PollPage from "./PollPage";
import Navbar from "./Navbar";
import Leaderboard from "./Leaderboard";
import NotFound from "./NotFound";
const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <div>
      {props.loading === true ? (
        <h1>Loading</h1>
      ) : (
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" exact element={<Login />} />
          <Route path="/leaderboard" exact element={<Leaderboard />} />
          <Route path="/home" exact element={<Dashboard />} />
          <Route path="/questions/:id" element={<PollPage />} />
          <Route path="/add" element={<NewPoll />} />
        </Routes>
      )}
    </div>
  );
};

const mapStateToProps = ({ users, questions }) => ({
  loading: Object.keys(users).length === 0,
});

export default connect(mapStateToProps)(App);
