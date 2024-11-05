import React from 'react';
import { Hero, Navbar, Features, Benefits, Testimonials, Faq, Cta, Footer } from '../components';

const HomePage = () => {
  return (
    <div>

      <Navbar />

      <div id='hero'>
        <Hero />
      </div>

      {/* <div id='features'>
        <Features />
      </div> */}

      {/* <div id='benefits'>
        <Benefits />
      </div> */}
      
      {/* <div id='testimonials'>
        <Testimonials />
      </div> */}

      {/* <div id='faq'>
        <Faq />
      </div> */}

      {/* <div id='cta'>
        <Cta />
      </div> */}
      
    </div>

  )
}

export default HomePage