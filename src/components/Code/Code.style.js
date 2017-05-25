import styled from 'styled-components';

const red = '#A93F55';
const white = '#F3F7F0';

export const Code = styled.div`
  position: relative;
  margin-top: 50px;
  padding: 80px 50px 0;
  max-width: 1520px;
  margin: 0 auto;
`;

export const Header = styled.h1`
  transform: rotate(-90deg);
  color: ${red};
  position: absolute;
  height: 50px;
  width: 150px;
  text-align: center;
  left: -10%;
`;

export const Title = styled.h2`
  color: ${white}
`;
