import React from 'react';
import { Container } from 'semantic-ui-react'

class About extends React.Component{
  render(){
    return(
        <Container text>
          <h2>About Me</h2>
          <p>I am a Frontend web developer interested in gaining more experience working in a team. I consider myself a designer having a background of 8 years in design from the Fine Arts School of Nicolae Tonitza. I do have a passion for Javascript, CSS, UX, UI and product prototyping. My main stack is React, Redux and SASS, but I started learning backend development with a focus on Node JS, MongoDB and Express.</p>
          <p>I consider myself as a problem solver, able to quickly think and reverse engineering applications to find out how things work.</p>
        </Container>
    )
  }
}

export default About;
