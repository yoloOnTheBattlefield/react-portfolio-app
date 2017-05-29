import styled, { keyframes } from 'styled-components';
import React from 'react';

export const Container = styled.div`
  position: relative;
`;

export const HeroImage = styled.div`
  background-color: rgb(230, 231, 229);
  background-image: url(${props => props.src});
  height: 100vh;
  position: relative;
  background-size: cover;
  background-position: 50%;
  width: 100vw;
  min-height: 100vh;
`;

const icon = keyframes`
  0%{
    transform: translatey(-100%);
    opacity: 1;
  }
  75%{
    opacity: 1;
  }
  100%{
    opacity: 0;
    transform: translatey(100%);
  }
`;

export const ScrollDown = styled.div`
  position: absolute;
  width: 100vw;
  left: 0;
  right: 0;
  margin: auto;
  height: 40px;
  bottom: 10px;
  box-sizing: border-box;
  overflow: hidden;
  &:after{
    background: white;
    position: absolute;
    content: '';
    width: 1px;
    height: 100%;
    animation: ${icon} 1.25s infinite ease-in-out;
  }
`;


export const LandingText = styled.div`
  width: 100%;
  text-align: center;
  height: 100%;
  position: absolute;
  left: 0; right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

//background: linear-gradient(rgba(0,0,0,1) 0%, rgba(0,0,0, 0) , rgba(0,0,0, 0.7) 70%, rgba(0,0,0, 0.5) 100%);


export const Header = styled.h1`
  font-size: 48px;
  color: white;
  text-shadow: 0px 0px 10px rgba(black, 0.8);
  z-index: 100;
`;


export const ButtonContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 200;
`;

export const Button = styled.button`
  margin: 50px auto;
  background: rgba(255, 255, 255, 0);
  color: white;
  border: none;
  paddinh: 50px 0;
  transition: 0.2s;
  &:hover{
    border-color: #4B88A2;
  }
`;

export const Background = styled.div`
height: 100vh;
width: 100vw;
  background: #212121;
  position: absolute;
  top: 0;
  display: flex;
`;

export const Line = styled.div`
  width: 20%;
  height: 100%;
  box-sizing: border-box;
  border: 0.5px solid rgba(255,255,255,0.2);
  border-top: 0;
  border-bottom: 0;

`;

export const Welcome = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  h1{
    font-size: 18em;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    position: absolute;
    height: 100px;
    text-align: center;
    color: #252525;
    text-shadow: 0px 0px 100px rgba(0,0,0,0.5);
  }
`;

const From = styled.div`
  transform: ${props => props.hovered ? 'translatey(-100px)' : 'translatey(0)'};
  transition: 0.2s ease-in-out;
`;

const To = styled.div`
  transform: ${props => props.hovered ? 'translatey(-65px)' : 'translatey(100px)'};
  transition: 0.2s ease-in-out;
`;


export class Switch extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hovered: false
    }
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  onMouseOver(){
    this.setState({
      hovered: true
    });
  }

  onMouseOut(){
    this.setState({
      hovered: false
    });
  }

  render(){
    const { hovered } = this.state;
    const { from, to } = this.props;
    return(
      <div
        style={{overflow: 'hidden', height: 50}}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
      >
        <From hovered={hovered}>{from}</From>
        <To hovered={hovered}>{to}</To>
      </div>
    )
  }
}
