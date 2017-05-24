import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

const Logo = styled.li`
  width: 40%;
  border: 0;
  display: flex;
  a{
    margin-left: 20px;
    font-family: 'Dancing Script', cursive;
    font-size: 30px;
    color: $color;
  }
  &:hover{
    border: 0;
  }
`;


const Brand = (props) => {
  return(
    <Logo>
      <Link to={props.path}>{props.brandName}</Link>
    </Logo>
  )
}

export default Brand;
