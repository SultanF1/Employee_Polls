import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import React from "react";
import { createStore } from "redux";
import reducer from "../reducers";
import middleware from "../middleware";
import Login from "../components/Login";
import { BrowserRouter as Router } from "react-router-dom";
const store = createStore(reducer, middleware);


it("Dashboard snapshot", () => {
  const component = render(
    <Provider store={store}>
        <Router>
      <Login />
      </Router>
    </Provider>
  );
  expect(component).toMatchSnapshot();
});
