import React from 'react';
import ToggleMenu from './_ToggleMenu';

class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showMenu: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    console.log('clicked')
    this.setState({
      showMenu: this.state.showMenu ? false : true
    })
  }

  render(){
    return(


          <ToggleMenu
            className={this.state.showMenu ? 'open' : 'close'}
            handleClick={this.handleClick.bind(this)}
          />


    )
  }
}

export default Navbar;
