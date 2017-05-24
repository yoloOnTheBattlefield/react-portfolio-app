import React from 'react';
import { Link } from 'react-router';

const Item = ({ path, caps }) => {
  const firstCaps = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const capsL = (string) => {
    return string.toUpperCase();
  }

  return(
    <li className='nav-item'>
      <Link
        activeClassName='active-link'
        to={ path }
      >
        { caps ? capsL(path) : firstCaps(path)}
      </Link>
    </li>
  )
}

export default Item;
