import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import DashboardHome from "./page";


// Mock Next Link
vi.mock("next/link", () => ({
  default: ({ children, href }: any) => <a href={href}>{children}</a>,
}));

// Mock framer-motion
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children }: any) => <div>{children}</div>,
  },
}));

// Mock Recharts
vi.mock("recharts", () => ({
  ResponsiveContainer: ({ children }: any) => <div>{children}</div>,
  AreaChart: ({ children }: any) => <div>{children}</div>,
  Area: () => <div />,
  XAxis: () => <div />,
  YAxis: () => <div />,
  Tooltip: () => <div />,
  CartesianGrid: () => <div />,
}));

// Mock dashboard shared components
vi.mock("@/components/dashboard/shared", () => ({
  PageHeader: ({ title, children }: any) => (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  ),
  StatCard: ({ title, value }: any) => (
  <div>
    <h2>{title}</h2>
    <p>{value}</p>
  </div>
),
  GlassCard: ({ children }: any) => <div>{children}</div>,
  RiskBadge: ({ level }: any) => <span>{level}</span>,
}));

// Mock Progress
vi.mock("@/components/ui/progress", () => ({
  Progress: () => <div>Progress</div>,
}));

// Mock Button
vi.mock("@/components/ui/button", () => ({
  Button: ({ children }: any) => (
    <button>{children}</button>
  ),
}));

// Mock Dummy Data
vi.mock("@/lib/dummy-data", () => ({
  stadiumInfo: {
    name: "MetLife Stadium",
    city: "New York",
    currentAttendance: 80000,
    capacity: 90000,
  },
  currentMatch: {
    time: "18:00",
    date: "12 Jul",
    stadium: "MetLife Stadium",
    group: "Group A",
  },
  crowdZones: [
    {
      id: 1,
      name: "North Gate",
      risk: "high",
      density: 90,
      queueTime: 15,
    },
  ],
  transportOptions: [
    {
      id: 1,
      name: "Metro",
      eta: 5,
      cost: "$5",
      duration: 15,
      crowd: "low",
    },
  ],
  visitorTrendData: [
    {
      time: "10 AM",
      visitors: 100,
    },
  ],
}));

describe("Dashboard", () => {
  it("renders dashboard heading", () => {
    render(<DashboardHome />);
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
  });

  it("shows current stadium", () => {
  render(<DashboardHome />);

  expect(
    screen.getByText("Current Stadium")
  ).toBeInTheDocument();

  expect(
    screen.getByText("MetLife Stadium")
  ).toBeInTheDocument();
});

  it("shows crowd density card", () => {
    render(<DashboardHome />);
    expect(screen.getByText(/crowd density/i)).toBeInTheDocument();
  });

  it("shows transportation section", () => {
    render(<DashboardHome />);
    expect(
      screen.getByText(/transportation status/i)
    ).toBeInTheDocument();
  });

  it("shows active alerts section", () => {
    render(<DashboardHome />);
    expect(screen.getByText(/active alerts/i)).toBeInTheDocument();
  });

  it("shows visitor inflow chart heading", () => {
    render(<DashboardHome />);
    expect(screen.getByText(/visitor inflow/i)).toBeInTheDocument();
  });

  it("shows Ask AI button", () => {
  render(<DashboardHome />);
  expect(
    screen.getByRole("button", { name: /ask ai/i })
  ).toBeInTheDocument();
});
});