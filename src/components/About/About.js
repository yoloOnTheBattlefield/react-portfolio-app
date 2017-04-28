import React from 'react';
import styled from 'styled-components';

import Content from '../../containers/Content';
import Container from '../../containers/Container';
import SocialLinks from '../SocialLinks';
import social_links from '../social_links';
import Quote from './Quote';

import {
  Row,
  FullWidth,
  EightWidth,
  QuarterWidth,
  ImgRounded
} from '../../containers/Grid';

const Header = styled.h1`
`;

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
          <a className='btn' target='_blank' href={this.state.githubData.html_url}>+</a>
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
          <FullWidth>
            <Quote />
          </FullWidth>
        </Row>
        <Row>
          <EightWidth>
            <Header>About Me</Header>
            <p>Hello, My name is Cristian<br/>
            I'm a self taught frontend developer based in London, UK.
            </p>
          </EightWidth>
          <QuarterWidth>
            <Github username='yoloOnTheBattlefield'/>
          </QuarterWidth>
        </Row>
        <Row>
          <SocialLinks links={social_links} />
        </Row>
      </Content>
    </Container>
  )
}

export default About;
