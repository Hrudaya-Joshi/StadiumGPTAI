import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import EmergencyDashboardPage from "./page";


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


// Mock UI components
vi.mock("@/components/ui/button", () => ({
  Button: ({ children }: any) => (
    <button>{children}</button>
  ),
}));


vi.mock("@/components/ui/badge", () => ({
  Badge: ({ children }: any) => (
    <span>{children}</span>
  ),
}));


// Mock toast
vi.mock("sonner", () => ({
  toast: {
    error: vi.fn(),
    success: vi.fn(),
  },
}));


// Mock dummy data
vi.mock("@/lib/dummy-data", () => ({
  emergencyAlerts: [
    {
      id: "1",
      type: "fire",
      location: "Gate A",
      severity: "high",
      status: "active",
      time: "2 min ago",
    },
  ],
}));


// Mock fetch
global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        response: "Evacuate immediately",
      }),
  })
) as any;



describe("Emergency Management", () => {

  it("renders emergency heading", () => {
    render(<EmergencyDashboardPage />);

    expect(
      screen.getByText(/emergency dashboard/i)
    ).toBeInTheDocument();
  });


  it("shows emergency alerts section", () => {
    render(<EmergencyDashboardPage />);

    expect(
      screen.getByText(/active emergency alerts/i)
    ).toBeInTheDocument();
  });


  it("shows emergency action button", () => {
    render(<EmergencyDashboardPage />);

    expect(
      screen.getByText(/emergency hotline/i)
    ).toBeInTheDocument();
  });


  it("shows safety information", () => {
    render(<EmergencyDashboardPage />);

    expect(
      screen.getByText(/nearest exits/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/ai evacuation instructions/i)
    ).toBeInTheDocument();
  });

});