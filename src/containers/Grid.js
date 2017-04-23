import React from 'react';
import styled from 'styled-components';

//

export const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;


export const FullWidth = styled.div`
  width: 100%;
  margin: 0 20px;
  @media (max-width: 800px) {
    width: 100%;
    margin: 20px;
  }
  img{
    width: 100%;
  }
`;

export const ThirdWidth = styled.div`
  width: 33.33%;
  margin: 0 20px;
  @media (max-width: 800px) {
    width: 100%;
    margin: 20px;
  }
  img{
    width: 100%;
  }
`;
