import React from 'react';

import Brand from './_Brand';
import ItemList from './ItemList';
import ToggleMenu from './_ToggleMenu';
import SocialLinks from '../SocialLinks';

import { Nav } from './Navbar.styles';

class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showPanel: false,
    }

    this.handleShowPanel = this.handleShowPanel.bind(this);
  }



  handleShowPanel(){
    this.setState({
      showPanel: this.state.showPanel ? false : true
    });
  }



  render(){
    const { show, links, mobileNav } = this.props;
    // const { mobileNav } = this.state;
    if(mobileNav){
      return <ToggleMenu handleShowPanel={this.handleShowPanel} active />
    }
    return(
      <Nav show={show}>
        <ul>
          <Brand path='home' brandName='Cristian Florea' />
          <ItemList />
          <SocialLinks links={links} />
        </ul>
      </Nav>
    )
  }
}

export default Navbar;
