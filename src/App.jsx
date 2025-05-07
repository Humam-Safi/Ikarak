import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import { lazy, Suspense } from 'react';
import LoadingSpinner from './components/common/LoadingSpinner';
import Footer from "./components/layout/Footer";

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const SaleProperties = lazy(() => import('./pages/SaleProperties'));
const RentProperties = lazy(() => import('./pages/RentProperties'));
const PropertyDetails = lazy(() => import('./pages/PropertyDetails'));
const Contact = lazy(() => import('./pages/Contact'));
const Services = lazy(() => import('./services/Services'));
const FAQ = lazy(() => import('./pages/FAQ'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const FeaturedProperties = lazy(() => import('./components/properties/featuredProperties'));
const OfferProperties = lazy(() => import('./components/properties/offerProperties'));
const NewProperties = lazy(() => import('./components/properties/newProperties'));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sale-properties" element={<SaleProperties />} />
              <Route path="/rent-properties" element={<RentProperties />} />
              <Route path="/featured-properties" element={<FeaturedProperties />} />
              <Route path="/offer-properties" element={<OfferProperties />} />
              <Route path="/new-properties" element={<NewProperties />} />
              <Route path="/property/:id" element={<PropertyDetails />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
