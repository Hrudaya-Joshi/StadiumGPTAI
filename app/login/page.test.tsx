import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import LoginPage from "./page";

// Mock router
const push = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push,
  }),
}));

// Mock auth provider
const signInWithGoogle = vi.fn();
const signInWithEmail = vi.fn();
const signUpWithEmail = vi.fn();
const resetPassword = vi.fn();

vi.mock("@/components/providers/auth-provider", () => ({
  useAuth: () => ({
    signInWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    resetPassword,
  }),
}));

// Mock framer-motion
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

describe("Login Page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders StadiumGPT AI title", () => {
    render(<LoginPage />);
    expect(screen.getByText(/stadiumgpt ai/i)).toBeInTheDocument();
  });

  it("renders email input", () => {
    render(<LoginPage />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });

  it("renders password input", () => {
    render(<LoginPage />);
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  it("shows Sign In button", () => {
    render(<LoginPage />);
    expect(
      screen.getByRole("button", { name: /sign in/i })
    ).toBeInTheDocument();
  });

  it("switches to Sign Up mode", () => {
    render(<LoginPage />);

    fireEvent.click(screen.getByText(/sign up/i));

    expect(screen.getByText(/create your account/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
  });

  it("switches to Forgot Password mode", () => {
    render(<LoginPage />);

    fireEvent.click(screen.getByText(/forgot password/i));

    expect(screen.getByText(/reset your password/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /send reset email/i,
      })
    ).toBeInTheDocument();
  });
});