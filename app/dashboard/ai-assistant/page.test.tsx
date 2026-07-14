import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AIAssistantPage from './page';

vi.mock('@/components/dashboard/shared', () => ({
  PageHeader: ({ title }: any) => <h1>{title}</h1>,
}));

vi.mock('@/components/ui/button', () => ({
  Button: ({ children, ...props }: any) => (
    <button {...props}>{children}</button>
  ),
}));

vi.mock('@/components/ui/input', () => ({
  Input: (props: any) => <input {...props} />,
}));

describe('AI Assistant', () => {
  it('renders AI assistant heading', () => {
    render(<AIAssistantPage />);

    expect(
      screen.getByText(/AI Assistant/i)
    ).toBeInTheDocument();
  });


  it('shows chat input', () => {
    render(<AIAssistantPage />);

    expect(
      screen.getByPlaceholderText(
        /Ask me anything about the stadium/i
      )
    ).toBeInTheDocument();
  });


  it('shows send button', () => {
    render(<AIAssistantPage />);

    expect(
      screen.getByRole('button', { name: '' })
    ).toBeInTheDocument();
  });
});