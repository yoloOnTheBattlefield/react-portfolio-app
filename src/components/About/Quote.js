import React from 'react';
import styled from 'styled-components';

const quote = {
  cite: '\'I\'m not going to get somewhere and say \'OK I\'m done\'. Success is never final, I\'ll just keep on going. The same way as failure never being fatal.\'',
  author: 'Conor McGregor'
}

const Paragraph = styled.blockquote`
  margin: 0 auto;
  font-style: italic;
  font-size: 20px;
`;
const Author = styled.figcaption`
  text-align: right;
`;

const Container = styled.figure`
  margin: 0px auto 50px auto;
  width: 100%;
  max-width: 700px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

const Quote = () => {
  return(
    <Container>
      <Paragraph>{quote.cite}</Paragraph>
      <Author>-{quote.author}</Author>
    </Container>
  )
}

export default Quote;
