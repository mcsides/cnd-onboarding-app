import { render, screen } from '@testing-library/react'
import { describe } from "vitest";
import Header from "./Header";

describe('Header Test Suite', () => {
  it('renders connduct heading', () => {
    render(<Header />);
    const heading = screen.getByRole('heading', { name: /connduct/i });
    expect(heading).toBeInTheDocument();
  });
});