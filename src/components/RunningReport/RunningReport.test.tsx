import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import fetchMock from "jest-fetch-mock";
import RunningReport from "./RunningReport";
import * as busData from "../../../public/data/bus-services-data.json";

// Mock the fetch function
fetchMock.enableMocks();

describe("RunningReport", () => {
  it("fetches data and renders it correctly", async () => {
    // Mock the response data
    const mockData = busData.data;
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    render(<RunningReport />);
    await screen.findByText("Bus Reports");
    expect(screen.getByText("Sydney Buses")).toBeInTheDocument();
    expect(screen.getByText("Westbus")).toBeInTheDocument();

    // Add more assertions based on your component's rendering logic
  });

  it("RunningReport renders correctly", () => {
    const tree = renderer.create(<RunningReport />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
