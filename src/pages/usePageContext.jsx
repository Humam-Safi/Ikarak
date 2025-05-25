import React from 'react'
import { createContext } from 'react'

export const PageContext = createContext()

export function PageContextProvider({ pageContext, children }) {
  return (
    <PageContext.Provider value={pageContext}>
      {children}
    </PageContext.Provider>
  )
}

export function usePageContext() {
  const context = React.useContext(PageContext)
  if (!context) {
    throw new Error('usePageContext() is called outside of PageContextProvider')
  }
  return context
} 