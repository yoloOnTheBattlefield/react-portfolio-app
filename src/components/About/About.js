import React from 'react';

import Header from '../../containers/Header';
import Content from '../../containers/Content';
import Container from '../../containers/Container';

const About = () => {
  return(
    <Container className='container'>
      <Header title='About'/>
      <Content />
    </Container>
  )
}

export default About;
