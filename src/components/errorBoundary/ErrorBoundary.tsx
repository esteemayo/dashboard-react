import { Component } from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: error,
    };
  }

  componentDidCatch(error: Error, info: object) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className='errorBoundary'>
          <div className='container'>
            <div className='wrapper'>
              <h1>Error</h1>
              <h2>Something went wrong</h2>
            </div>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
