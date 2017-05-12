import React from 'react';
import styled from 'styled-components';

import Content from '../../containers/Content';
import Container from '../../containers/Container';
import Quote from './Quote';

import SocialLinks from '../SocialLinks';
import social_links from '../social_links';

import {
  Row,
  FullWidth,
  EightWidth,
  HalfWidth,
  QuarterWidth,
  ImgRounded
} from '../../containers/Grid';


const username = (username) => `https://api.github.com/users/${username}`;

class Github extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      requestFailed: false
    };
  }
  componentDidMount(){
    fetch(username(this.props.username))
      .then(data => data.json())
      .then(data => {
        this.setState({
          githubData: data
        });
      });
  }

  render(){
    if(this.state.requestFailed) return  <p>Failed!</p>
    if(!this.state.githubData) return <p>Loading...</p>
    console.log(this.state.githubData)
    return (
      <div className='github wrapper'>
        <div className='heading'>
          <img src={this.state.githubData.avatar_url} className='avatar' />
          <h2 className='name'>{this.state.githubData.name}</h2>
          <p>{this.state.githubData.location}</p>
        </div>
      </div>
    )
  }
}

const About = () => {
  return(
    <Container className='container'>
      <Content>
        <Row>
          <Quote />
        </Row>
        <Row>
          <HalfWidth>
            <div className='about-section'>
              <div className='about-header'>
                <h1>About Me</h1>
              </div>
              <div className='about-paragraph'>
                <p>
                  I am a junior Frontend web developer interested in making websites and web applications. While I have a solid understanding  of programming, I consider myself more of a designer, having a background in design at the Fine Arts School of Nicolae Tonitza from Bucharest, Romania where I have studied for 8 years.
                </p>
                <p>
                	Building  easy to use, aesthetically pleasing UI elements, eye-candy CSS animations and JS applications is truly a passion of mine. It gives me great pleasure in seeing immediate results in the work and pieces I create. I actively seek out new technologies and stay up-to-date on industry trends and advancements.
                </p>
                <p>
                	I consider myself as a problem solver, able to quickly think and reverse engineer applications to find out how things work.
                </p>
              </div>
            </div>
          </HalfWidth>
          <HalfWidth>
            <Github username='yoloOnTheBattlefield'/>
              <div className='skills-section'>
                <div>
                  <h3>My key skills are:</h3>
                </div>
                <div className='skills-list'>
                  <ul className='skills'>
                    <li className='skill'>
                      HTML
                      <ul className='skill-indent'>
                        <li className='skill'>PUG</li>
                      </ul>
                    </li>
                    <li className='skill'>
                      CSS
                      <ul className='skill-indent'>
                        <li className='skill'>SASS</li>
                        <li className='skill'>Animations</li>
                        <li className='skill'>Responsive Design</li>
                        <li className='skill'>Bootstrap</li>
                        <li className='skill'>Semantic UI</li>
                      </ul>
                    </li>
                    <li className='skill'>
                      Javascript
                      <ul className='skill-indent'>
                        <li className='skill'>React</li>
                        <li className='skill'>Redux</li>
                      </ul>
                    </li>
                    <li className='skill'>Version control with Git and Github</li>
                  </ul>
                </div>
              </div>
          </HalfWidth>
        </Row>
        <Row>
          <SocialLinks links={social_links} />
        </Row>
      </Content>
    </Container>
  )
}

export default About;
