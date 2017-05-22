import React from 'react';
import { Icon } from 'semantic-ui-react';
import SocialLinks from '../SocialLinks';
import { Motion, spring } from 'react-motion';

const social_links = [
  'https://twitter.com/yoloOnTheBF',
  'https://github.com/yoloOnTheBattlefield',
  'http://codepen.io/yoloonthebf/',
];

const Hero = () => {
  return (
    <div className='Hero'>
      <div className='Landing__hero' />
      <div className='Landing__text' >
        <h1>WEB DEVELOPER</h1>
        <h2>Developer and designer with a passion for technology</h2>
        <h2>Currently working as a freelancer</h2>
        <div className='Landing__social'>
          <SocialLinks links={social_links}/>
        </div>
        <div className='Landing__button' >
          <button className='button'>Let's work together</button>
          <Icon className='Landing__icon' name='angle double down' />
        </div>
      </div>
    </div>
  )
}
export default Hero;
