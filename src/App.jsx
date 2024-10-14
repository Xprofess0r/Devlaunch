import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderSection from "./Sections/Headers.jsx";
import Hero from "./Sections/Hero.jsx";
import Features from "./Sections/Features.jsx";
import Pricing from "./Sections/Pricing.jsx";
import Faq from "./Sections/Faq.jsx";
import Download from "./Sections/Download.jsx";
import Footer from "./Sections/Footer.jsx";
import Team from "./pages/Team.jsx"; // Import the new Team page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeaderSection /> {/* Navbar appears only on the home page */}
              <Hero />
              <Features />
              <Pricing />
              <Faq />
              <Download />
              <Footer />
            </>
          }
        />
        <Route path="/team" element={<Team />} /> {/* Team page without navbar */}
      </Routes>
    </Router>
  );
};

export default App;
