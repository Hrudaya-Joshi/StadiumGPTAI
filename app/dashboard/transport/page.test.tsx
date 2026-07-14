import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import TransportPage from "./page";


// Mock framer motion
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children }: any) => <div>{children}</div>,
  },
}));


// Mock shared components
vi.mock("@/components/dashboard/shared", () => ({
  PageHeader: ({ title, children }: any) => (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  ),

  GlassCard: ({ children }: any) => (
    <div>{children}</div>
  ),

  RiskBadge: ({ level }: any) => (
    <span data-testid="risk">
      {level}
    </span>
  ),
}));


// Mock Button
vi.mock("@/components/ui/button", () => ({
  Button: ({ children }: any) => (
    <button>{children}</button>
  ),
}));


// Mock Card
vi.mock("@/components/ui/card", () => ({
  Card: ({ children }: any) => (
    <div>{children}</div>
  ),
}));


// Mock data
vi.mock("@/lib/dummy-data", () => ({
  transportOptions: [
    {
      id: "1",
      name: "Metro Express",
      type: "metro",
      eta: 5,
      duration: 15,
      cost: "$5",
      crowd: "low",
    },
    {
      id: "2",
      name: "City Bus",
      type: "bus",
      eta: 10,
      duration: 25,
      cost: "$3",
      crowd: "medium",
    },
  ],
}));


describe("Transport Page", () => {

  it("renders transportation heading", () => {
    render(<TransportPage />);

    expect(
      screen.getByText(/transportation assistant/i)
    ).toBeInTheDocument();
  });


  it("shows transport options", () => {
  render(<TransportPage />);

  expect(
    screen.getAllByText("Metro Express").length
  ).toBeGreaterThan(0);

  expect(
    screen.getByText("City Bus")
  ).toBeInTheDocument();
});


  it("shows ETA", () => {
    render(<TransportPage />);

    expect(
      screen.getByText("5")
    ).toBeInTheDocument();

    expect(
      screen.getByText("10")
    ).toBeInTheDocument();

    expect(
      screen.getAllByText(/min/i).length
    ).toBeGreaterThan(0);
  });

});