import React from 'react';
import Hero from './Hero';
import AppHeader from './Header';
import About from './About';
import AppFooter from './Footer';
import Tutors from './Tutors';
function LandingPage() {
  return (
    <div>
      <AppHeader />
      <Hero />
      <About />
      <Tutors />
      <AppFooter />
    </div>
  );
}

export default LandingPage;
