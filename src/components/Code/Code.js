import React from 'react';
import Waypoint from 'react-waypoint';
import {  Code } from './Code.style';
import Project from './Project';
import Projects from './Projects';

export default class extends React.Component{
  constructor(props){
    super(props);
    this.state={
      sticky: false
    }
  }
  onEnter(){
    console.log('Code Entered');
  }
  onLeave(){
    console.log('Code Left');
  }
  render(){
    return(
      <Code>
        <Waypoint
          onLeave={this.onLeave}
          topOffset={60}
        />
        <Projects>
          <Project />
          <Project />
          <Project />
          <Project />
        </Projects>
      </Code>
    )
  }
}
