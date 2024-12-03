import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import SpaceGallery from './components/SpaceGallery';
import About from './components/About';
import AIAssistant from './components/AIAssistant';
import Amenities from './components/Amenities';
import MemberTypes from './components/MemberTypes';
import EarlyAccess from './components/EarlyAccess';
import CommunityEvents from './components/CommunityEvents';
import Founders from './components/Founders';
import BottomCTA from './components/BottomCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Pricing />
      <SpaceGallery />
      <About />
      <AIAssistant />
      <Amenities />
      <MemberTypes />
      <EarlyAccess />
      <CommunityEvents />
      <Founders />
      <BottomCTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;