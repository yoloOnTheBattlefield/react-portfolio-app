import React from 'react';
// import { Icon } from 'semantic-ui-react';
import Waypoint from 'react-waypoint';
import Scroll from 'react-scroll';
// import { Parallax, Background } from 'react-parallax';
import styled, { keyframes } from 'styled-components';

import SocialLinks from '../SocialLinks';

const Link = Scroll.Link;

const social_links = [
  'https://twitter.com/yoloOnTheBF',
  'https://github.com/yoloOnTheBattlefield',
  'http://codepen.io/yoloonthebf/',
];


const HeroImage = styled.div`
  background-color: rgb(230, 231, 229);
  background-image: url(${props => props.src});
  height: 100vh;
  position: relative;
  background-size: cover;
  background-position: 50%;
  width: 100vw;
  min-height: 100vh;
`;

const icon = keyframes`
  0%{
    transform: translatey(-100%);
    opacity: 1;
  }
  75%{
    opacity: 1;
  }
  100%{
    opacity: 0;
    transform: translatey(100%);
  }
`;

const ScrollDown = styled.div`
  position: absolute;
  width: 100vw;
  left: 0;
  right: 0;
  margin: auto;
  height: 40px;
  bottom: 10px;

  overflow: hidden;
  &:after{
    background: white;
    position: absolute;
    content: '';
    width: 1px;
    height: 100%;
    animation: ${icon} 2s infinite ease-in-out;
  }
`;



const Hero = ({ handleSetActive, onHeroEnter, onHeroLeave }) => {


  return (
    <div className='Hero'>
        <HeroImage src={'https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?dpr=2&auto=format&fit=crop&w=1199&h=800&q=80&cs=tinysrgb&crop=&bg='}/>
        <div className='Landing__text' >
          <h1>Cristian Florea</h1>
          <h2>DEVELOPER WITH A PASSION FOR DESIGN</h2>
          <div className='Landing__social'>
            <SocialLinks large links={social_links}/>
          </div>
          <div className='Landing__button' >
            <button className='button'>Let's work together</button>
            <Link

              to='content'
              smooth={true}
              duration={500}
              onSetActive={handleSetActive}>
                <ScrollDown />
            </Link>
          </div>
        </div>
      <Waypoint onEnter={onHeroEnter} onLeave={onHeroLeave} />
    </div>
  )
}
export default Hero;

// handleSetActive={handleSetActive}
