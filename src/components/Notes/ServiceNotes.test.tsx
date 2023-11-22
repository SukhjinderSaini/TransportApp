import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";

import ServiceNotes from "./ServiceNotes";
it("Notes renders correctly", () => {
  const tree = renderer
    .create(<ServiceNotes serviceName="Sydney Bus" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("shows service notes text area correctly", () => {
  render(<ServiceNotes serviceName="Sydney Bus" />);
  expect(screen.getByRole("textbox")).toBeInTheDocument();
});

it("shows service add button correctly", () => {
  render(<ServiceNotes serviceName="Sydney Bus" />);
  expect(screen.getByRole("button")).toBeDisabled();
});
