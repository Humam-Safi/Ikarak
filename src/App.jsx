import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes as we create more pages */}
            <Route
              path="/properties"
              element={<div>Properties Page (Coming Soon)</div>}
            />
            <Route
              path="/property-details"
              element={<div>Property Details (Coming Soon)</div>}
            />
            <Route
              path="/contact"
              element={<div>Contact Page (Coming Soon)</div>}
            />
            <Route
              path="/about"
              element={<About />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
