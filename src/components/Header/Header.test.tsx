import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";

import Header from "./Header";
it("renders correctly", () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("shows title correctly", () => {
  render(<Header />);
  expect(screen.getByText("Bus Service")).toBeInTheDocument();
});

it("shows theme button when added props", () => {
  render(<Header showThemeSwitch />);
  expect(screen.getAllByRole("checkbox")).toBeTruthy();
});
