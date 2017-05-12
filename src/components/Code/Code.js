import React from 'react';
import Codepen from 'react-codepen';
import Content from '../../containers/Content';
import Container from '../../containers/Container';

import {
  Row,
  FullWidth
} from '../../containers/Grid';



const Code = () => {
  return(
    <Container className='container'>
      <Content>
        <Row>
          <FullWidth>
            <Codepen user='yoloonthebf' hash='EmaGmj' height='500'/>
          </FullWidth>
          <FullWidth>
            <Codepen user='yoloonthebf' hash='wdgXWB' height='500'/>
          </FullWidth>
          <FullWidth>
            <Codepen user='yoloonthebf' hash='aWZXQb' height='500'/>
          </FullWidth>
          <FullWidth>
            <Codepen user='yoloonthebf' hash='LxNpJo' height='500'/>
          </FullWidth>
          <FullWidth>
            <Codepen user='yoloonthebf' hash='jmBZYr' height='500'/>
          </FullWidth>
          <FullWidth>
            <Codepen user='yoloonthebf' hash='MJLWyw' height='500'/>
          </FullWidth>
          <FullWidth>
            <Codepen user='yoloonthebf' hash='KmWEpq' height='500'/>
          </FullWidth>
        </Row>
      </Content>
    </Container>
  )
}

export default Code;
