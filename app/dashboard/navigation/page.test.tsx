import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import NavigationPage from "./page";


// Mock framer motion
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children }: any) => <div>{children}</div>,
    button: ({ children, ...props }: any) => (
      <button {...props}>{children}</button>
    ),
  },
}));


// Mock dashboard shared components
vi.mock("@/components/dashboard/shared", () => ({
  PageHeader: ({ title, description, children }: any) => (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
    </div>
  ),
  GlassCard: ({ children }: any) => <div>{children}</div>,
}));


// Mock Button
vi.mock("@/components/ui/button", () => ({
  Button: ({ children, ...props }: any) => (
    <button {...props}>{children}</button>
  ),
}));


// Mock data
vi.mock("@/lib/dummy-data", () => ({
  navPoints: [
    {
      id: "1",
      name: "Gate A",
      type: "gate",
      distance: 120,
      walkTime: 3,
      position: {
        lat: 40.812,
        lng: -74.074,
      },
    },
    {
      id: "2",
      name: "Food Court",
      type: "food",
      distance: 200,
      walkTime: 5,
      position: {
        lat: 40.813,
        lng: -74.075,
      },
    },
  ],
}));


describe("Navigation Page", () => {

  it("renders navigation heading", () => {
    render(<NavigationPage />);

    expect(
      screen.getByText(/stadium navigation/i)
    ).toBeInTheDocument();
  });


  it("shows stadium map section", () => {
    render(<NavigationPage />);

    expect(
      screen.getByText(/interactive stadium map/i)
    ).toBeInTheDocument();
  });


  it("shows route section", () => {
    render(<NavigationPage />);

    expect(
      screen.getByText(/shortest walking route/i)
    ).toBeInTheDocument();
  });


  it("shows navigation points", () => {
    render(<NavigationPage />);

    expect(
      screen.getByText(/navigation points/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/gate a/i)
    ).toBeInTheDocument();
  });


  it("shows accessibility route button", () => {
    render(<NavigationPage />);

    expect(
      screen.getByRole("button", {
        name: /accessibility route/i,
      })
    ).toBeInTheDocument();
  });

});