import React from 'react';
import Item from './_Item';
import styled from 'styled-components';

const Items = styled.div`
  width: 66.66%;
  display: flex;
  justify-content: space-around;
`;

const ItemList = () => {
  return (
    <Items>
      <Item path='code' caps />
      <Item path='about' caps />
      <Item path='contact' caps />
    </Items>
  )
};

export default ItemList;
