import React from 'react';
import styled from 'styled-components';

const Line = styled.div`
  width: 45px;
  height: 5px;
  background: white
  position: absolute;
  transition: 0.2s;
  border-radius: 5px;
`;

const Button = styled.div`
  display: block;
  position: fixed;
  top: 45px;
  right: 45px;
  width: 45px;
  height: 45px;
  z-index: 100;
  cursor: pointer;
`;

const ToggleMenu = ({ toggleMenu, active, handleShowPanel }) => {
    return (
      <Button onClick={handleShowPanel}>
        <Line bg={active || toggleMenu} style={{top: 5}} />
        <Line bg={active || toggleMenu} style={{top: '20px'}} />
        <Line bg={active || toggleMenu} style={{bottom: 5}} />
      </Button>
    )
}

export default ToggleMenu;
