import React from 'react';

import Content from '../../containers/Content';
import Container from '../../containers/Container';

import {Row} from '../../containers/Grid';

const Contact = () => {
  return(
    <Container className='container'>
      <Content>
        <Row>
          <h1>Say hi</h1>
        </Row>
        <Row>
          <form>
            <textarea></textarea>
          </form>
        </Row>
      </Content>
    </Container>
  )
}

export default Contact;
