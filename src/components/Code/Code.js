import React from 'react';
import Header from '../../containers/Header';
import Content from '../../containers/Content';
import Container from '../../containers/Container';

import styled from 'styled-components';




//extra styles

// display: flex;
// flex-direction: column;
// justify-content: center;


const Code = () => {
  return(
    <Container className='container'>
      <Header title='Code'/>
      <Content />
    </Container>
  )
}

export default Code;
