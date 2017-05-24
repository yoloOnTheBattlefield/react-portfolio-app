import React from 'react';
import { Icon } from 'semantic-ui-react';
import SocialLinks from '../SocialLinks';
import Waypoint from 'react-waypoint';

const social_links = [
  'https://twitter.com/yoloOnTheBF',
  'https://github.com/yoloOnTheBattlefield',
  'http://codepen.io/yoloonthebf/',
];

const Hero = ({ handleLeave, onEnter }) => {


  return (
    <div className='Hero'>
      <div className='Landing__hero' />
      <div className='Landing__text' >
        <h1>Cristian Florea</h1>
        <h2>DESIGNER WITH A PASSION FOR TECHNOLOGY</h2>
        <div className='Landing__social'>
          <SocialLinks links={social_links}/>
        </div>
        <div className='Landing__button' >
          <button className='button'>Let's work together</button>
          <Icon className='Landing__icon' name='angle double down' />
        </div>
      </div>
      <Waypoint onEnter={onEnter} onLeave={handleLeave} />
    </div>
  )
}
export default Hero;
