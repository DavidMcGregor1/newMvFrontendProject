import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test('renders "cardColumns" div', () => {
  render(<App />);

  const cardColumnsDiv = screen.queryByTestId("card-columns-div");
  expect(cardColumnsDiv).toBeInTheDocument();
});
