import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const List = styled.ul`
display: flex;
justify-content: space-around;
width: 100%;
max-width: 200px;
margin: 0 auto;
z-index: 100;
  a{
    color: ${props => props.color ? 'black' : 'white'};
    transition: 0.2s;
    display: flex;
    span{
      margin: auto;
      font-size: ${props => props.large ? '30px' : '20px'};
    }
  }
  a:hover{
    color: ${props => props.color ? 'black' : 'white'};
  }
`;

const Switch = styled.span`
  transform: ${props => props.hovered && props.large ? 'translatey(-45px)' : 'translatey(0)'};
  background: ${props => props.hovered ? '' : '' };
  transition: 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  height: 35px;
  justify-content: space-between;
`;

class SocialItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hovered: false
    };
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
    return (
      <a
        href={this.props.link}
        target="_blank"
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        style={{ overflow: 'hidden'}}
      >
        {
          this.props.large ? (
            <Switch hovered={this.state.hovered} large={this.props.large}>
              <div style={{
                  padding: '5px 10px',
                  boxSizing: 'border-box',
                }}> <FontAwesome name={this.props.name} /> </div>
              <div style={{
                  padding: '0px 10px',
                  margin: '5px 10px',
                  background: '#4CE0D2',
                  boxSizing: 'border-box',
                  borderBottom: '5px solid black'
                }}> <FontAwesome name={this.props.name} /> </div>
            </Switch>
          ) : (
            <FontAwesome name={this.props.name} />
          )
        }

      </a>
    )
  }
}

const SocialLinks = ({ links, color, large }) => {
  return(
    <List large={large} color={color} >
      {
        links.map((link) => {
          let name;
          if(link.indexOf('https://') === 0){
            name = link.substr(8).split('/')[0].split('.')[0];
          }
          if(link.indexOf('http://') === 0){
            name = link.substr(7).split('/')[0].split('.')[0];
          }
          if(link.indexOf('www.') === 4){
            name = link.substr(4).split('/')[0].split('.')[0];
          }
          return <SocialItem link={link} key={name} name={name} large={large} />
        })
      }
    </List>
  )
}

export default SocialLinks;
