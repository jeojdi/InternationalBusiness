'use client'
import { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: unknown) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-cream p-4">
          <div className="text-center max-w-md">
            <h2 className="text-3xl font-bold text-fig-purple mb-4">
              Something went wrong
            </h2>
            <p className="text-charcoal/70 mb-6">
              We're sorry, but this section couldn't load properly.
            </p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="bg-aussie-gold text-charcoal px-6 py-3 rounded-md font-semibold hover:bg-fig-purple hover:text-white transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
