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
          <Route path="/" exact element={<Login />} />
          <Route path="/leaderboard/:uid" exact element={<Leaderboard />} />
          <Route path="/home/:uid" exact element={<Dashboard />} />
          <Route path="/poll/:id/:uid" element={<PollPage />} />
          <Route path="/new/:uid" element={<NewPoll />} />
        </Routes>
      )}
    </div>
  );
};

const mapStateToProps = ({ users, questions }) => ({
  loading: Object.keys(users).length === 0,
});

export default connect(mapStateToProps)(App);
