import { render, screen } from '@testing-library/react'
import LandingPage from './LandingPage'

describe('LandingPage', () => {
  it('renders the welcome heading', () => {
    render(<LandingPage />)
    const heading = screen.getByRole('heading', { name: /welcome to onboarding/i })
    expect(heading).toBeInTheDocument()
  })
})