import React from 'react';
import Header from '../../containers/Header';
import Content from '../../containers/Content';
import Container from '../../containers/Container';

import {
  Row,
  FullWidth,
  ThirdWidth
} from '../../containers/Grid';

const Code = () => {
  return(
    <Container className='container'>
      <Header title='Code'/>
      <Content>
        <Row>
          <ThirdWidth>
            <img src={'https://unsplash.it/300/300?image=1080'} />
          </ThirdWidth>
          <ThirdWidth>
            <img src={'https://unsplash.it/300/300?image=1060'} />
          </ThirdWidth>
          <ThirdWidth>
            <img src={'https://unsplash.it/300/300?image=190'} />
          </ThirdWidth>
        </Row>
        <Row>
          <FullWidth>
            <img src={'https://unsplash.it/1200/300?image=1070'} />
          </FullWidth>
        </Row>
      </Content>
    </Container>
  )
}

export default Code;
