import React from "react";
import { render, screen } from "@testing-library/react";
import LandingPage from "./LandingPage";

describe("LandingPage", () => {
  it("renders the welcome message", () => {
    render(<LandingPage />);
    expect(screen.getByText("Welcome to Onboarding")).toBeInTheDocument();
  });
});