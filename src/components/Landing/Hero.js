import React from 'react';
import Waypoint from 'react-waypoint';
import Scroll from 'react-scroll';

import {
  Container,
  HeroImage,
  Switch,
  ScrollDown,
  LandingText,
  Header,
  ButtonContainer,
  Button
 } from './Hero.style';
 import HeroBackground from './HeroBackground';

import SocialLinks from '../SocialLinks';

const Link = Scroll.Link;

const social_links = [
  'https://twitter.com/yoloOnTheBF',
  'https://github.com/yoloOnTheBattlefield',
  'http://codepen.io/yoloonthebf/',
];

const image = 'https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?dpr=2&auto=format&fit=crop&w=1199&h=800&q=80&cs=tinysrgb&crop=&bg='

const Hero = ({ handleSetActive, onHeroEnter, onHeroLeave }) => {
  return (
    <Container>
        <HeroImage/>
        <HeroBackground />
        <LandingText>
          <Header large> Cristian Florea <Switch from='DEVELOPER' to='DESIGNER' /> </Header>
          <SocialLinks large links={social_links}/>
          <ButtonContainer>
            {/*<Button>Let's work together</Button>*/}
            <Link
              to='content'
              smooth={true}
              duration={500}
              onSetActive={handleSetActive}
            >
                <ScrollDown />
            </Link>
          </ButtonContainer>
        </LandingText>
      <Waypoint onEnter={onHeroEnter} onLeave={onHeroLeave} />
    </Container>
  )
}
export default Hero;

// handleSetActive={handleSetActive}
