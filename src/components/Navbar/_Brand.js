import React from 'react';
import { Link } from 'react-router';
import { Logo } from './Navbar.styles';



const Brand = (props) => {
  return(
    <Logo>
      <Link to={props.path}>{props.brandName}</Link>
    </Logo>
  )
}

export default Brand;
