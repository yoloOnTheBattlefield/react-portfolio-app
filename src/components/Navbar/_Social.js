import React from 'react';
import FontAwesome from 'react-fontawesome';

const SocialItem = (props) => {
  return(
    <a href={props.link} target="_blank" ><FontAwesome name={props.name} /></a>
  )
}

const Social = (props) => {
  return(
    <li className='social'>
      <ul>
        {
          // removing the 'http' || 'https' || 'www' && whatever is after the domain name
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
      </ul>
    </li>
  )
}

export default Social;
