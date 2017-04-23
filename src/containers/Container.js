import React from 'react';
import styled from 'styled-components';

const Styles = styled.section`
  width: 100%;
  height: 100vh;
  padding-top: 60px;
  background: red;
`;

const Container = (props) => {
  return (
    <Styles>{props.children}</Styles>
  )
}

export default Container;
