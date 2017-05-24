import React from 'react';
import Hero from './Hero';
import Content from './Content';

const Landing = ({ handleLeave, onEnter }) => {
  return (
  <div className='Landing'>
    <Hero onEnter={onEnter} handleLeave={handleLeave} />
    <Content />
  </div>
  )
}

export default Landing;
