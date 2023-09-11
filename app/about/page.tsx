import React from 'react'
import AboutSection from './components/AboutSection';
import TournamentRules from './components/TournamentRules';
import Footer from '@/components/Footer';
import Overview from './components/Overview';
import Ready from './components/Ready';

const About = () => {
  return (
    <div className='flex flex-col'>
      <AboutSection />
      <TournamentRules />
      <Overview />
      <Ready />
      <Footer/>
    </div>
  )
}

export default About;