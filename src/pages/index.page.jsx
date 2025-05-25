import React from 'react'
import { PageContextProvider } from './usePageContext'
import { PageShell } from './PageShell'

export { PageShell }

export default function Page(pageContext) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <PageShell>
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8">Welcome to Aqarat Homsia</h1>
            <p className="text-lg text-center text-gray-600">
              Your trusted platform for real estate in Homs
            </p>
          </div>
        </PageShell>
      </PageContextProvider>
    </React.StrictMode>
  )
} 