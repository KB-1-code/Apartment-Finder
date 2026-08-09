import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "../components/SignupAndLogin/LoginPage";

test("renders login form", () => {
  render(
    <BrowserRouter>
      <LoginPage setRole={jest.fn()} />
    </BrowserRouter>
  );

  expect(screen.getByText("LOGIN")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter Email")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter Password")).toBeInTheDocument();
});

test("shows validation message when fields are empty", () => {
  window.alert = jest.fn();

  render(
    <BrowserRouter>
      <LoginPage setRole={jest.fn()} />
    </BrowserRouter>
  );

  fireEvent.click(screen.getByRole("button", { name: "LOG IN" }));

  expect(window.alert).toHaveBeenCalledWith(
    "Please enter both email and password."
  );
});