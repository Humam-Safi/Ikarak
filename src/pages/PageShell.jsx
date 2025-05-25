import React from 'react'
import { usePageContext } from './usePageContext'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import FloatingWhatsApp from '../components/common/FloatingWhatsApp'
import ScrollToTop from '../components/common/ScrollToTop'
import PageTransition from '../components/common/PageTransition'

export function PageShell({ children }) {
  const { urlPathname } = usePageContext()
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="pt-28 flex-grow">
        <PageTransition>
          {children}
        </PageTransition>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  )
} 