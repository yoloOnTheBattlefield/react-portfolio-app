import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';



const List = styled.ul`
display: flex;
justify-content: space-around;
width: 100%;
max-width: 200px;
  a{
    color: #666;
    transition: 0.2s;
    display: flex;
    span{
      margin: auto;
      font-size: 20px;
    }
  }
  a:hover{
    color: black;
  }
`;

const SocialItem = (props) => {
  return(
    <a href={props.link} target="_blank" ><FontAwesome name={props.name} /></a>
  )
}

const SocialLinks = (props) => {
  return(
    <List>
      {
        props.links.map((link) => {
          if(link.indexOf('https://') === 0){
            const name = link.substr(8).split('/')[0].split('.')[0];
            return <SocialItem link={link} key={name} name={name} />
          }
          if(link.indexOf('http://') === 0){
            const name = link.substr(7).split('/')[0].split('.')[0];
            return <SocialItem link={link} key={name} name={name} />
          }
          if(link.indexOf('www.') === 4){
            const name = link.substr(4).split('/')[0].split('.')[0];
            return <SocialItem link={link} key={name} name={name} />
          }
        })
      }
    </List>
  )
}

export default SocialLinks;
