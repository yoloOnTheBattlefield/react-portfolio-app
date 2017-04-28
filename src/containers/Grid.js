import React from 'react';
import styled from 'styled-components';

//

export const Row = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
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
    margin: 0 20px;
  }
  img{
    width: 100%;
  }
`;

export const EightWidth = styled.div`
  width: 66.66%;
  margin: 0 20px;
`;

export const QuarterWidth = styled.div`
  width: 33.33%;
  margin: 0 20px;
  display: flex;
  @media (max-width: 800px) {
    width: 50%;
    margin: 0 20px;
  }
`;

export const ThirdWidth = styled.div`
  width: 25%;
  margin: 0 20px;
  @media (max-width: 800px) {
    width: 50%;
    margin: 0 20px;
  }
  @media (max-width: 500px) {
    width: 80%;
    margin: 20px auto;
  }
  img{
    width: 100%;
  }
`;


export const ImgRounded = styled.img`
  border-radius: 5px;
  margin: auto;
`;
