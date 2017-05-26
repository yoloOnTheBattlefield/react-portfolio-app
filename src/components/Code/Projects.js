import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`

`;

export default class Projects extends React.Component{
  render(){
    return(
      <Wrapper>
        {this.props.children}
      </Wrapper>
    )
  }
}
