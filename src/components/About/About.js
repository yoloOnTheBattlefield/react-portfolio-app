import React from 'react';
import { Container } from 'semantic-ui-react'

class About extends React.Component{
  render(){
    return(
        <Container text>
          <h2>About Me</h2>
          <p>I am a Web Developer. 
            I consider myself as a problem solver, able to quickly think and reverse engineering applications to find out how things work.
          </p>
        </Container>
    )
  }
}

export default About;
