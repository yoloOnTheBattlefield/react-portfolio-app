import React from 'react';
import Header from '../../containers/Header';
import Content from '../../containers/Content';
import Container from '../../containers/Container';

import {
  Row,
  ColumnWide,
  ColumnThird
} from '../../containers/Grid';




//extra styles

// display: flex;
// flex-direction: column;
// justify-content: center;


const Code = () => {
  return(
    <Container className='container'>
      <Header title='Code'/>
      <Content>
        <Row>
          <ColumnThird>UI</ColumnThird>
          <ColumnThird>Websites</ColumnThird>
          <ColumnThird>Apps</ColumnThird>
        </Row>
        <Row>
          <ColumnWide>Contributions</ColumnWide>
        </Row>
      </Content>
    </Container>
  )
}

export default Code;
