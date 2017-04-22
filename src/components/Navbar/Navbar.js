import React from 'react';

import Name from './_Name';
import Item from './_Item';
import Social from './_Social';
import Collapse from './_Collapse';
import ToggleMenu from './_ToggleMenu';

class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showMenu: false
    }
  }

  handleClick(){
    this.setState({
      showMenu: this.state.showMenu ? false : true
    })
    console.log(this.state.showMenu);
  }

  menuSelect() {
    console.log('selected')
  }

  render(){
    return(
      <nav>
        <ul>
          <Name path='home' name='Cristian Florea'/>
          <Collapse class={this.state.showMenu ? 'open' : 'close'}>
            <div className='nav-items'>
              <Item handleClick={this.handleClick.bind(this)} path='code' caps={true}/>
              <Item handleClick={this.handleClick.bind(this)} path='about' caps={true}/>
              <Item handleClick={this.handleClick.bind(this)} path='contact' caps={true}/>
            </div>
            <Social links={this.props.links}/>
          </Collapse>
          <ToggleMenu
            class={this.state.showMenu ? 'open' : 'close'}  handleClick={this.handleClick.bind(this)} />
        </ul>
      </nav>
    )
  }
}

export default Navbar;
