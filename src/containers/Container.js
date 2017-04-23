import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  padding-top: 60px;
`;

const Container = (props) => {
  return (
    <Wrapper>{props.children}</Wrapper>
  )
}

export default Container;
