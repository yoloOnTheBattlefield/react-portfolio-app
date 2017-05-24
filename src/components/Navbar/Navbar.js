import React from 'react';

import Brand from './_Brand';
import Item from './_Item';
import Collapse from './_Collapse';
import ToggleMenu from './_ToggleMenu';
import SocialLinks from '../SocialLinks';

class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showMenu: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({
      showMenu: this.state.showMenu ? false : true
    })
  }

  render(){
    return(
      <nav>
        <ul>
          <Brand path='home' brandName='Cristian Florea' />
            <div className='nav-items'>
              <Item handleClick={this.handleClick} path='code' caps={true}/>
              <Item handleClick={this.handleClick} path='about' caps={true}/>
              <Item handleClick={this.handleClick} path='contact' caps={true}/>
            </div>
            <SocialLinks links={this.props.links} />

        </ul>
      </nav>
    )
  }
}

export default Navbar;
