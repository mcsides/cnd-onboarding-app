import { render, screen } from '@testing-library/react'
import LandingPage from './LandingPage'
import { describe, it, expect, vi } from 'vitest'

vi.mock('../Header/Header', () => ({
  default: () => <div data-testid="mock-header">Mock Header</div>
}))

describe('LandingPage Test Suite', () => {
  it('renders the header component', () => {
    render(<LandingPage />)
    const header = screen.getByTestId('mock-header')
    expect(header).toBeInTheDocument()
  })
})