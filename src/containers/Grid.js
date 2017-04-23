import React from 'react';
import styled from 'styled-components';

//

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Row = (props) => {
  return  <Div>{props.children}</Div>
}

//

const FullWidth = styled.div`
  width: calc(100% - 20px);
  background: #456;
  @media (max-width: 800px) {
    height: 100%;
  }
`;

export const ColumnWide = (props) => {
  return <FullWidth>{props.children}</FullWidth>
}

const ThirdWidth = styled.div`
  width: calc(33.33% - 20px);
  background: hotpink;
  @media (max-width: 800px) {
    width: calc(100% - 20px);
    height: 100%;
  }
`;

export const ColumnThird = (props) => {
  return <ThirdWidth>{props.children}</ThirdWidth>
}
