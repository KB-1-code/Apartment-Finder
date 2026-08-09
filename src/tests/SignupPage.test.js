import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SignupPage from "../components/SignupAndLogin/SignupPage";

test("renders signup form", () => {
  render(
    <BrowserRouter>
      <SignupPage setRole={jest.fn()} />
    </BrowserRouter>
  );

  expect(screen.getByRole("heading", { name: "SIGN UP" })).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter Username")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter Email")).toBeInTheDocument();
  expect(
    screen.getByPlaceholderText("Enter Telephone Number")
  ).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter Password")).toBeInTheDocument();
});

test("shows validation message when signup fields are empty", () => {
  window.alert = jest.fn();

  render(
    <BrowserRouter>
      <SignupPage setRole={jest.fn()} />
    </BrowserRouter>
  );

  fireEvent.click(screen.getByRole("button", { name: "SIGN UP" }));

  expect(window.alert).toHaveBeenCalledWith(
    "Please fill in all fields."
  );
});