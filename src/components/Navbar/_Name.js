import React from 'react';
import { Link } from 'react-router';

const Name = (props) => {
  return(
    <li className='logo'>
      <Link to={props.path}>{props.name}</Link>
    </li>
  )
}

export default Name;
