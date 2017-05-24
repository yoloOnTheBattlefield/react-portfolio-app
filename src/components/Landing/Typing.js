import React from 'react';
import styled from 'styled-components';

const Message = styled.div`
  width: 100px;
  height: 30px;
  background: $msg-color;
  position: relative;
  left: 20px;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
`;

const Ball = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: auto;
  background: $writting;
  animation: 1s isWritting infinite ease-in-out;
  &:nth-of-type(2){
   animation-delay: .1s;
  }
  &:nth-of-type(3){
    animation-delay: .2s;
  }

  @keyframes isWritting{
    0%, 100%{
      opacity: 0.2;
    }
    50%{
      opacity: 1;
  }
}
`;


const Typing = () => {
  return(
    <Message>
      <Ball />
      <Ball />
      <Ball />
    </Message>
  )
};

export default Typing;
