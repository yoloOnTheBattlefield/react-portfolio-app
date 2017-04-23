import React from 'react';

import Header from '../../containers/Header';
import Content from '../../containers/Content';
import Container from '../../containers/Container';

const Contact = () => {
  return(
    <Container className='container'>
      <Header title='Contact'/>
      <Content />
    </Container>
  )
}

export default Contact;
