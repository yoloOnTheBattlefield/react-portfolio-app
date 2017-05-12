import styled from 'styled-components';

//

export const Row = styled.div`
  width: 66.66%;
  max-width: 900px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  @media (max-width: 800px) {
    flex-wrap: wrap;
    width: 90%;
  }
`;


export const FullWidth = styled.div`
  width: 100%;
  @media (max-width: 800px) {
    width: 100%;
  }
  img{
    width: 100%;
  }

`;

export const HalfWidth = styled.div`
  width: 50%;
  img{
    width: 100%;
  }
  @media (max-width: 800px) {
    width: 100%;
    display: flex;
    img{
      width: 80%;
      height: 100%;
      margin: auto;
    }
  }
`;

export const EightWidth = styled.div`
  width: 66.66%;
  margin: 0 auto;
`;

export const QuarterWidth = styled.div`
  width: 33.33%;
  display: flex;
  @media (max-width: 800px) {
    width: 50%;
  }
`;

export const ThirdWidth = styled.div`
  width: 25%;
  margin: 0 20px;
  @media (max-width: 800px) {
    width: 50%;
  }
  @media (max-width: 500px) {
    width: 80%;
  }
  img{
    width: 100%;
  }
`;


export const ImgRounded = styled.img`
  border-radius: 5px;
  margin: auto;
`;
