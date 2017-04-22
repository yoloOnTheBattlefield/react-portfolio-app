import React from 'react';
import { Link } from 'react-router';

const Item = (props) => {
  const firstCaps = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const caps = (string) => {
    return string.toUpperCase();
  }

  return(
    <li className='nav-item' onClick={props.handleClick}>
      <Link to={props.path}>{props.caps ? caps(props.path) : firstCaps(props.path)}</Link>
    </li>
  )
}

export default Item;
