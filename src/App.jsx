import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Services from './Components/Services';
import HowItWorks from './Components/HowItWorks';
import Testimonials from './Components/Testimonials';
import FAQ from './Components/FAQ';
import ContactSection from './Components/ContactSection';
import Footer from './Components/Footer';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

// Landing Page as a separate component
const LandingPage = () => (
  <>
    <Hero />
    <Services />
    <HowItWorks />
    <Testimonials />
    <FAQ />
    <ContactSection />
  </>
);

// Layout wrapper that shows Navbar/Footer only on "/"
const AppLayout = () => {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  return (
    <>
      {isLanding && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {isLanding && <Footer />}
    </>
  );
};

// Main App
function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
