import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import App from "../src/App";
import store from "../src/store";

describe("App", () => {
  test("renders the App component", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
