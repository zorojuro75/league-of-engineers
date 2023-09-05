import React from 'react'
import AboutSection from './components/AboutSection';
import TournamentRules from './components/TournamentRules';
import Footer from '@/components/Footer';
import Overview from './components/Overview';

const About = () => {
  return (
    <div className='flex flex-col'>
      <AboutSection />
      <TournamentRules />
      <Overview />
      <Footer/>
    </div>
  )
}

export default About;