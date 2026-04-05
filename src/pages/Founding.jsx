import React from 'react'
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Philosophy from '../components/Philosophy';
import Industries from '../components/Industries';
import StartupJourney from '../components/StartupJourney';
import Framework from '../components/Framework';
import WhyChooseUs from '../components/WhyChooseUs';

const Founding = () => {
  return (
    //  <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] ..."></div>
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] ...">
      <Hero />
      <Marquee />
      <Philosophy />
      <Industries />
      <StartupJourney />
      <Framework />
      <WhyChooseUs />
    </div>
    
  )
}

export default Founding;