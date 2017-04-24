import React from 'react';

import Header from '../../containers/Header';
import Content from '../../containers/Content';
import Container from '../../containers/Container';

import SocialLinks from '../SocialLinks';
import social_links from '../social_links';


import Quote from './Quote';

import {
  Row,
  FullWidth,
  EightWidth,
  QuarteWidth,
  ImgRounded
} from '../../containers/Grid';

const About = () => {
  return(
    <Container className='container'>
      <Header title='About'/>
      <Content>
        <Row>
          <FullWidth>
            <Quote />
          </FullWidth>
        </Row>
        <Row>
          <EightWidth>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </EightWidth>
          <QuarteWidth>
            <ImgRounded src={'https://unsplash.it/200/200?image=1074'} />
          </QuarteWidth>
        </Row>
        <Row>
          <SocialLinks links={social_links} />
        </Row>
      </Content>
    </Container>
  )
}

export default About;
