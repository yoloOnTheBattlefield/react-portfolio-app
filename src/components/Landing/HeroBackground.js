import React from 'react';

import {
  Background,
  Line,
  Welcome
} from './Hero.style';

const HeroBackground = () => {
  return (
    <Background>
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Welcome>
        <h1>Welcome</h1>
      </Welcome>
    </Background>
  )
}

export default HeroBackground;
