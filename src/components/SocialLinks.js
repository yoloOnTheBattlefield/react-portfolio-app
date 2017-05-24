import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const List = styled.ul`
display: flex;
justify-content: space-around;
width: 100%;
max-width: 200px;
margin: 0 auto;
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

const SocialItem = (props) => {
  return <a href={props.link} target="_blank" ><FontAwesome name={props.name} /></a>
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
          return <SocialItem link={link} key={name} name={name} />
        })
      }
    </List>
  )
}

export default SocialLinks;
