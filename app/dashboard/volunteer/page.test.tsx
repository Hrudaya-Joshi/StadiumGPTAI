import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import VolunteerDashboardPage from "./page";


// Mock framer motion
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children }: any) => <div>{children}</div>,
  },
}));


// Mock toast
vi.mock("sonner", () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));


// Mock shared components
vi.mock("@/components/dashboard/shared", () => ({
  PageHeader: ({ title }: any) => (
    <h1>{title}</h1>
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


// Mock data
vi.mock("@/lib/dummy-data", () => ({
  volunteerTasks: [
    {
      id: "1",
      title: "Guide visitors to Gate A",
      type: "navigation",
      priority: "high",
      status: "pending",
      location: "Gate A",
      time: "10:00 AM",
    },
    {
      id: "2",
      title: "Help lost child",
      type: "lost-found",
      priority: "medium",
      status: "completed",
      location: "North Zone",
      time: "11:00 AM",
    },
  ],
}));



describe("Volunteer Management", () => {


  it("renders volunteer heading", () => {
    render(<VolunteerDashboardPage />);

    expect(
      screen.getByText(/volunteer dashboard/i)
    ).toBeInTheDocument();
  });


  it("shows volunteer list or section", () => {
    render(<VolunteerDashboardPage />);

    expect(
      screen.getByText("Guide visitors to Gate A")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Help lost child")
    ).toBeInTheDocument();
  });


  it("shows volunteer action button", () => {
    render(<VolunteerDashboardPage />);

    expect(
      screen.getByText("Accept")
    ).toBeInTheDocument();
  });


  it("shows status information", () => {
    render(<VolunteerDashboardPage />);

    expect(
      screen.getByText("pending")
    ).toBeInTheDocument();

    expect(
      screen.getByText("completed")
    ).toBeInTheDocument();
  });


});