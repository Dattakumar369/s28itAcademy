import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import FoundationProgram from './components/FoundationProgram';
import CareerRestartProgram from './components/CareerRestartProgram';
import IntensiveCareerProgram from './components/IntensiveCareerProgram';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EnrollmentForm from './components/EnrollmentForm';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);

  return (
    <div className="App">
      <Header onEnrollClick={() => setIsEnrollmentOpen(true)} />
      <Hero onEnrollClick={() => setIsEnrollmentOpen(true)} />
      <FoundationProgram />
      <CareerRestartProgram />
      <IntensiveCareerProgram />
      <Contact />
      <Footer onEnrollClick={() => setIsEnrollmentOpen(true)} />
      <EnrollmentForm 
        isOpen={isEnrollmentOpen} 
        onClose={() => setIsEnrollmentOpen(false)} 
      />
      <WhatsAppFloat />
    </div>
  );
}

export default App;

