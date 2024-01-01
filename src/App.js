
import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Headsection from './components/Headsection/Headsection.js';
import './App.css';
import FaqSection from './components/Faqsection/Faqsection.js';
import CardSlider from './components/CardSlider/CardSlider.js';
import Footer from './components/Footer/Footer.js';
import Examination from './components/Examination/Examination.js';
import Subscribe from './components/Subscribe/Subscribe.js';
import Information from './components/Information/Information.js';

function App() {
  return (
    <div>
      <Navbar />
      <Headsection/>
      <Examination/>
      
      <CardSlider/>
      <Information/>
      <FaqSection/>
      <Subscribe/>
      
      <Footer/>
    </div>
  );
}

export default App;
