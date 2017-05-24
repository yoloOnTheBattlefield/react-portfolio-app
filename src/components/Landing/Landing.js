import React from 'react';
import Hero from './Hero';
import Content from './Content';

const Landing = ({ onLeave, onEnter }) => {
  return (
  <div className='Landing'>
    <Hero onEnter={onEnter} onLeave={onLeave} />
    <Content />
  </div>
  )
}

export default Landing;
