import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import Contact from "./pages/Contact";
import Services from "./services/Services";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./services/TermsOfService";
import Footer from "./components/layout/Footer";
import FeaturedProperties from "./components/properties/featuredProperties";
import OfferProperties from "./components/properties/offerProperties";
import NewProperties from "./components/properties/newProperties";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/featured-properties" element={<FeaturedProperties />} />
            <Route path="/offer-properties" element={<OfferProperties />} />
            <Route path="/new-properties" element={<NewProperties />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
