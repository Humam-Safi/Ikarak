import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import FilterContext from './Context/filterContext.jsx'
import SearchContext from './Context/searchContext.jsx'
import LogoLoader from './components/common/LogoLoader'
import { ErrorBoundary } from 'react-error-boundary'

// Error boundary for lazy loading
const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Something went wrong</h2>
      <p className="text-gray-600 mb-4">{error.message}</p>
      <button 
        onClick={resetErrorBoundary}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Try Again
      </button>
    </div>
  </div>
);

// Import App directly instead of lazy loading it
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LogoLoader />}>
    <FilterContext>
      <SearchContext>
      <App />
      </SearchContext>
    </FilterContext>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
)
