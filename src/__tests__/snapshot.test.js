import { render } from "@testing-library/react";
import App from "../components/App";
import { Provider } from "react-redux";
import React from "react";
import { createStore } from "redux";
import reducer from "../reducers";
import middleware from "../middleware";

const store = createStore(reducer, middleware);

it("App snapshot", () => {
  const component = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(component).toMatchSnapshot();
});
