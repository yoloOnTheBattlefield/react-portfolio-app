import React from 'react';
import styled from 'styled-components';
import Waypoint from 'react-waypoint';


const Container = styled.div`
  height: 80vh;
  width: 100%;
  margin: 0 auto;
`;

const Card = styled.div`
  width: 450px;
  height: 275px;
  background: #4CE0D2;
  position: absolute;
  left: 0;
  bottom: 0;
  transform: ${props => props.hovered ? 'matrix(1.095, -0.095, 0.095, 1.095, 0, 0)' : 'matrix(1, 0, 0, 1, 0, 0)'};
  position: relative;
  box-shadow: ${props => props.hovered ? '10px 10px 5px rgba(0,0,0,0.1)' : '10px, 0, 10px black'};
  transition: 0.2s cubic-bezier(0.58,-0.29, 0.84, 0.05);
`;

const Title = styled.h1`
  position: absolute;
  color: #292F36;
  font-size: 45px;
  top: 100px;
  bottom: 100px;
  right: 0;
  transform: translatex(${props => props.hovered ? '80px' : '30px' }) scale(${props => props.hovered ? '1.1' : '0.8' }) rotate(${props => props.hovered ? '5deg' : '0deg' });
  height: 50px;
  transition: 0.2s cubic-bezier(0.58,-0.29, 0.84, 0.05);
`;

const Wrapper = styled.div`
  width: 1005;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;
  transition: 0.2s cubic-bezier(0.58,-0.29, 0.84, 0.05);
`;

const Link = styled.a`
  color: white;
  font-size: 35px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 35px;
  transform: translate(${props => props.hovered ? '40%' : '-100%' }) rotate(${props => props.hovered ? '5deg' : '0deg' });
  transition: 0.3s cubic-bezier(0.58,-0.29, 0.84, 0.05);

`;


const Description = styled.h2`
  font-size: 25px;
  position: absolute;
  transform: translatex(${props => props.hovered ? '80px' : '30px' }) scale(${props => props.hovered ? '1.1' : '0.8' }) rotate(${props => props.hovered ? '5deg' : '0deg' });
  color: #292F36;
  top: 150px;
  right: 0;
  height: 50px;
  transition: 0.2s cubic-bezier(0.58,-0.29, 0.84, 0.05);
`;

class Project extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      onMouseOver: false,
      cardEntered: false
    }
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.onLeave = this.onLeave.bind(this);
  }

  handleMouseOver(){
    this.setState({
      onMouseOver: this.state.onMouseOver ? false : true
    });
  }

  onEnter(){
    console.log('card entered')
    this.setState({
      cardEntered: true
    })
  }

  onLeave(){
    console.log('card left')
    this.setState({
      cardEntered: false
    })
  }

  render(){
    const { onMouseOver, cardEntered } = this.state;

    return(
      <Container cardEntered={cardEntered}>

        <Card
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOver}
          hovered={onMouseOver}
        >
          <Title hovered={onMouseOver} >Project # 1</Title>
          <Description hovered={onMouseOver} >Description # 1</Description>
          <Wrapper>
            <Link hovered={onMouseOver} >Call to action</Link>
          </Wrapper>
        </Card>
        <Waypoint
          onLeave={this.onLeave}
          topOffset={60}
          onEnter={this.onEnter}
        />
      </Container>
    )
  }
};

export default Project;
