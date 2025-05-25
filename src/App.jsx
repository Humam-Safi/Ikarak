import "./App.css";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import { lazy, Suspense, useState, useEffect } from 'react';
import LogoLoader from './components/common/LogoLoader';
import Footer from "./components/layout/Footer";
import FloatingWhatsApp from "./components/common/FloatingWhatsApp";
import ScrollToTop from "./components/common/ScrollToTop";
import PageTransition from "./components/common/PageTransition";
import ErrorBoundary from './components/common/ErrorBoundary';

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Properties = lazy(() => import('./pages/Properties'));
const PropertyDetails = lazy(() => import('./pages/PropertyDetails'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQ = lazy(() => import('./pages/FAQ'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const UserGuide = lazy(() => import('./pages/UserGuide'));
const SaleProperties = lazy(() => import('./pages/SaleProperties'));
const RentProperties = lazy(() => import('./pages/RentProperties'));

// 404 Page component
const NotFound = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page not found</p>
      <a href="/" className="text-blue-600 hover:text-blue-800">
        Return to Home
      </a>
    </div>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Handle initial load
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  // Handle route changes
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <ErrorBoundary>
      {isLoading && <LogoLoader />}
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="pt-28 flex-grow">
          <PageTransition>
            <Suspense fallback={<LogoLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/properties" element={<Properties />} />
                <Route path="/property/:id" element={<PropertyDetails />} />
                <Route path="/sale-properties" element={<SaleProperties />} />
                <Route path="/rent-properties" element={<RentProperties />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/user-guide" element={<UserGuide />} />
                
                {/* Redirect old routes to new ones */}
                <Route path="/sale" element={<Navigate to="/sale-properties" replace />} />
                <Route path="/rent" element={<Navigate to="/rent-properties" replace />} />
                <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
                <Route path="/guide" element={<Navigate to="/user-guide" replace />} />
                
                {/* 404 route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </PageTransition>
        </main>
        <Footer />
        <FloatingWhatsApp />
        <ScrollToTop />
      </div>
    </ErrorBoundary>
  );
}

export default App;
