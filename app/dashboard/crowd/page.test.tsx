import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import CrowdPage from "./page";


// Mock framer motion
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children }: any) => <div>{children}</div>,
  },
}));


// Mock recharts
vi.mock("recharts", () => ({
  ResponsiveContainer: ({ children }: any) => <div>{children}</div>,
  AreaChart: ({ children }: any) => <div>{children}</div>,
  Area: () => <div />,
  BarChart: ({ children }: any) => <div>{children}</div>,
  Bar: () => <div />,
  XAxis: () => <div />,
  YAxis: () => <div />,
  Tooltip: () => <div />,
  CartesianGrid: () => <div />,
}));


// Mock shared components
vi.mock("@/components/dashboard/shared", () => ({
  PageHeader: ({ title, children }: any) => (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  ),

  StatCard: ({ title, value }: any) => (
    <div>
      <span>{title}</span>
      <span>{value}</span>
    </div>
  ),

  GlassCard: ({ children }: any) => (
    <div>{children}</div>
  ),

  RiskBadge: ({ level }: any) => (
    <span>{level}</span>
  ),
}));


// Mock Progress
vi.mock("@/components/ui/progress", () => ({
  Progress: () => <div>Progress</div>,
}));


// Mock Badge
vi.mock("@/components/ui/badge", () => ({
  Badge: ({ children }: any) => (
    <span>{children}</span>
  ),
}));


// Mock data
vi.mock("@/lib/dummy-data", () => ({
  crowdZones: [
    {
      id: 1,
      name: "North Gate",
      risk: "high",
      density: 90,
      queueTime: 15,
    },
    {
      id: 2,
      name: "South Gate",
      risk: "safe",
      density: 40,
      queueTime: 5,
    },
  ],

  crowdTrendData: [
    {
      time: "10 AM",
      density: 80,
    },
  ],

  queueTrendData: [
    {
      time: "10 AM",
      gate_a: 10,
      gate_b: 5,
      gate_c: 3,
      gate_d: 2,
    },
  ],
}));


describe("Crowd Management", () => {

  it("renders crowd intelligence heading", () => {
    render(<CrowdPage />);

    expect(
      screen.getByText(/crowd intelligence/i)
    ).toBeInTheDocument();
  });


  it("shows crowd density heatmap", () => {
    render(<CrowdPage />);

    expect(
      screen.getByText(/crowd density heatmap/i)
    ).toBeInTheDocument();
  });


  it("shows zone details", () => {
    render(<CrowdPage />);

    expect(
      screen.getByText(/zone details/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/north gate/i)
    ).toBeInTheDocument();
  });


  it("shows high risk zone", () => {
  render(<CrowdPage />);

  expect(
    screen.getByText("North Gate")
  ).toBeInTheDocument();
});


  it("shows queue wait times", () => {
    render(<CrowdPage />);

    expect(
      screen.getByText(/queue wait times by gate/i)
    ).toBeInTheDocument();
  });

});