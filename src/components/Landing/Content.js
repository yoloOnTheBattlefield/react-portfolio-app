import React from 'react';
import { Container } from 'semantic-ui-react';
import Code from '../Code/Code';
import About from '../About/About';


const Content = () => {
  return (
    <Container id='content' style={{paddingTop: 60, marginTop: 0}}>
      <Code />
      <About />
    </Container>
  )
}


export default Content;
