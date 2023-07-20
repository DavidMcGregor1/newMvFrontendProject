import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

test('Button renders with "Add Task" label', () => {
  const label = "Add Task";

  render(<Button label={label} />);
  const buttonElement = screen.getByText(label);
  expect(buttonElement).toBeInTheDocument();
});

test('Button renders with "Submit" label', () => {
  const label = "Submit";

  render(<Button label={label} />);
  const buttonElement = screen.getByText(label);
  expect(buttonElement).toBeInTheDocument();
});
