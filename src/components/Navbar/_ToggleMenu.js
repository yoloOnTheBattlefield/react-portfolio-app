import React from 'react';
import styled from 'styled-components';

const Line = styled.div`
  width: 45px;
  height: 5px;
  background: ${props => props.bg ? 'black' : 'white' }
  position: absolute;
  transition: 0.2s;
  border-radius: 5px;
`;

const Button = styled.div`
  display: block;
  position: fixed;
  top: 45px;
  right: 45px;
  width: 45px;
  height: 30px;
  z-index: 100;
`;

class ToggleMenu extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      toggleMenu: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({
      toggleMenu: this.state.toggleMenu ? false : true
    })
    console.log(this.state.toggleMenu)
  }


  render(){
    const { toggleMenu } = this.state;

    return (
      <Button onClick={this.handleClick}>
        <Line bg={toggleMenu} style={{top: 0}} />
        <Line bg={toggleMenu} style={{top: '12.5px'}} />
        <Line bg={toggleMenu} style={{bottom: 0}} />
      </Button>
    )
  }
}

export default ToggleMenu;


//style={{background: `${toggleMenu ? 'black' : 'white' }`}}
