import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

test("Button renders correctly", () => {
  const label = "Add Task";

  render(<Button label={label} />);
  const buttonElement = screen.getByText(label);
  expect(buttonElement).toBeInTheDocument();
});
