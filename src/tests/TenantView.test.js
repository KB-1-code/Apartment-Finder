import React from "react";
import { render, screen } from "@testing-library/react";
import TenantView from "../components/TenantView";

test("renders available properties heading", () => {
  render(
    <TenantView
      cards={[]}
      onAdd={jest.fn()}
    />
  );

  expect(
    screen.getByText("Available Properties for Tenant")
  ).toBeTruthy();
});

test("shows message when there are no properties", () => {
  render(
    <TenantView
      cards={[]}
      onAdd={jest.fn()}
    />
  );

  expect(
    screen.getByText("No properties are currently available.")
  ).toBeTruthy();
});