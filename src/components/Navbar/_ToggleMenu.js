import React from 'react';
import styled from 'styled-components';

const Line = styled.div`
  width: 45px;
  height: 5px;
  background: ${props => props.bg ? 'black' : 'white' }
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
  height: 30px;
  z-index: 100;
  cursor: pointer;
`;

const ToggleMenu = ({ toggleMenu, active, handleShowPanel }) => {
    return (
      <Button onClick={handleShowPanel}>
        <Line bg={active || toggleMenu} style={{top: 0}} />
        <Line bg={active || toggleMenu} style={{top: '12.5px'}} />
        <Line bg={active || toggleMenu} style={{bottom: 0}} />
      </Button>
    )
}

export default ToggleMenu;
