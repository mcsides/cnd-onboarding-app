import { render, screen } from '@testing-library/react'
import LandingPage from './Landing'
import { describe, it, expect, vi } from 'vitest'

vi.mock('../Header/Header', () => ({
  default: () => <div data-testid="mock-header">Mock Header</div>
}))
vi.mock('../Footer/Footer', () => ({
  default: () => <div data-testid="mock-footer">Mock Header</div>
}))

describe('LandingPage Test Suite', () => {
  it('renders the full component', () => {
    render(<LandingPage />)
    const header = screen.getByTestId('mock-header')
    const footer = screen.getByTestId('mock-footer')
    expect(header).toBeInTheDocument()
    expect(footer).toBeInTheDocument()
  })
})