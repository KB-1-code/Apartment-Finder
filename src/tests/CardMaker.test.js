import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CardMaker from "../components/CardMaker";

test("renders property card form", () => {
  render(
    <CardMaker
      cards={[]}
      onCreate={jest.fn()}
      onDelete={jest.fn()}
    />
  );

  expect(screen.getByText("Create Property Card")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter property name")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter image URL")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter rooms")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter price")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter description")).toBeInTheDocument();
});

test("prevents creating a property when fields are empty", () => {
  window.alert = jest.fn();

  const onCreate = jest.fn();

  render(
    <CardMaker
      cards={[]}
      onCreate={onCreate}
      onDelete={jest.fn()}
    />
  );

  fireEvent.click(screen.getByRole("button", { name: "Add Card" }));

  expect(window.alert).toHaveBeenCalledWith(
    "Please fill in all fields."
  );

  expect(onCreate).not.toHaveBeenCalled();
});