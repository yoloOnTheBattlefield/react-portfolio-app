import React from 'react';
import styled from 'styled-components';

const ContentSection = styled.div`
  height: 90%;
  min-height: 90%;
  display: flex;
  flex-direction: column;
`;

const Content = (props) => {
  return(
    <ContentSection>{props.children}</ContentSection>
  )
}

export default Content;
