import React from "react";
import { render, screen } from "@testing-library/react";
import CurrencyTable from "../../src/components/CurrencyTable";
import { Provider } from "react-redux";
import store from "../../src/store";

describe("currency table", () => {
  it("render list", () => {
    render(
      <Provider store={store}>
        <CurrencyTable />
      </Provider>
    );
    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});
