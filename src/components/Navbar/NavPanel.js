import React from 'react';
import styled from 'styled-components';
import ItemList from './ItemList';

const Panel = styled.div`
  width: 100vw;
  height: ${props => props.height};
  background: white;
  position: fixed;
  z-index: 99;
`;

const NavPanel = () => {
  const height = window.innerHeight;
  return (
    <Panel height={height} >
      <ItemList />
    </Panel>
  )
}

export default NavPanel;
