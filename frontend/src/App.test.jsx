import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom/vitest'
import App from './App.jsx'

afterEach(cleanup)

function renderApp(path = '/') {
  window.localStorage.clear()
  window.history.pushState({}, '', path)
  return render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  )
}

describe('portfolio routes', () => {
  it('shows the portfolio identity on the home route', () => {
    renderApp('/')

    expect(screen.getByRole('heading', { name: 'Jhon Francis Dela Cruz' })).toBeInTheDocument()
  })

  it('uses compact social tiles and paired project previews on the landing page', () => {
    const { container } = renderApp('/')

    expect(container.querySelectorAll('.social-tile')).toHaveLength(4)
    expect(container.querySelectorAll('.home-project-tile')).toHaveLength(2)
    expect(container.querySelector('.interests-visual')).toBeInTheDocument()
  })

  it('redirects the legacy tech-stack URL to the React skills route', () => {
    renderApp('/Stack.html')

    expect(screen.getByRole('heading', { name: 'Tech Stack' })).toBeInTheDocument()
  })

  it('uses the original navbar structure and available visitor controls', () => {
    const { container } = renderApp('/')

    expect(container.querySelector('.nav__logo')).toHaveTextContent('Francis.dev')
    expect(container.querySelector('.nav__links a[href="/skills"]')).toHaveTextContent('Stack')
    expect(container.querySelector('.nav__views')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Switch to charcoal theme' })).toBeInTheDocument()
  })

  it('switches the navbar between the two allowed dark grayscale themes', () => {
    renderApp('/')
    fireEvent.click(screen.getByRole('button', { name: 'Switch to charcoal theme' }))

    expect(document.documentElement).toHaveAttribute('data-theme', 'charcoal')
  })

  it('preserves the original mobile menu toggle interaction', () => {
    renderApp('/')
    const menuButton = screen.getByRole('button', { name: 'Open menu' })

    fireEvent.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    expect(document.querySelector('.nav')).toHaveClass('nav--open')
  })

  it('renders original stack groups with staggered reveal pills', () => {
    const { container } = renderApp('/skills')

    expect(screen.getByRole('heading', { name: 'Tech Stack' })).toBeInTheDocument()
    expect(container.querySelectorAll('.stackGroup')).toHaveLength(6)
    expect(container.querySelectorAll('.stackList .stackPill')).toHaveLength(27)
    expect(container.querySelector('.stackList')).toHaveClass('is-visible')
    expect(container.querySelector('.stackPill').style.getPropertyValue('--n')).toBe('0')
  })

  it('shows the migrated projects on the projects route', () => {
    renderApp('/projects')

    expect(screen.getByRole('heading', { name: /projects built to solve practical problems/i })).toBeInTheDocument()
    expect(screen.getByText('Outflow')).toBeInTheDocument()
    expect(screen.getByText('Library Management System')).toBeInTheDocument()
  })
})
