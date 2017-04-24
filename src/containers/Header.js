import React from 'react';

import styled from 'styled-components';


const Title = styled.div`
  height: 10%;
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
`;

const Text = styled.div`
  border-bottom: 5px solid;
  width: 25%;
  display: flex;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  height: 70px;
`;

const H = styled.h1`
  font-size: 30px;
`;

const Header = (props) => {
  return(
    <Title>
      <Text><H>{props.title}</H></Text>
    </Title>
  )
}

export default Header;
