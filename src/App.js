import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import Header from './components/header/HeaderPortion';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

import HomePage from './pages/HomePage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ChallengesPage from './pages/ChallengesPage';
import PlansPage from './pages/PlansPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // This ensures that the scroll position is always reset to the top.
    document.documentElement.scrollTop = 0; // Reset scroll to top
    document.body.scrollTop = 0; // Ensure consistency across browsers
  }, [location]); // Runs whenever the location changes

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* This ensures the page is at the top on route change */}
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/challenges" element={<ChallengesPage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <ScrollUp />
    </Router>
  );
};

export default App;
