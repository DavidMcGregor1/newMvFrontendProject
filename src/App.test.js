import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test('renders "cardColumns" div', () => {
  render(<App />);

  const cardColumnsDiv = screen.queryByTestId("card-columns-div");
  expect(cardColumnsDiv).toBeInTheDocument();
});

test('renders "card-container" div', async () => {
  render(<App />);

  await waitFor(() => {
    const cardContainers = screen.queryAllByTestId("card-container");
    expect(cardContainers.length).toBeGreaterThan(0); // Check that there's at least one card-container
  });
});
