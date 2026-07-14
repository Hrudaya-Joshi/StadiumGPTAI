import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Button } from "./button";

describe("Button", () => {
  it("renders correctly", () => {
    render(<Button>Click Me</Button>);

    expect(
      screen.getByRole("button", { name: /click me/i })
    ).toBeInTheDocument();
  });

  it("supports disabled state", () => {
    render(<Button disabled>Disabled</Button>);

    expect(
      screen.getByRole("button", { name: /disabled/i })
    ).toBeDisabled();
  });
});