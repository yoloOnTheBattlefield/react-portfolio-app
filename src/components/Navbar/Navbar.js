import React from 'react';

import Brand from './_Brand';
import ItemList from './ItemList';
import ToggleMenu from './_ToggleMenu';
import SocialLinks from '../SocialLinks';

class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mobileNav: false,
      mounted: false
    }
    this.mobileNav = this.mobileNav.bind(this);
  }

  mobileNav(){
    if(this._mounted){
      this.setState({
        mounted: true,
        mobileNav: window.innerWidth < 860 ? true : false
      })
    }
  }

  componentDidMount(){
    this._mounted = true;
    this.mobileNav();
    window.addEventListener('resize', this.mobileNav);
  }

  render(){
    const { handleShowPanel } = this.props;
    return(
      <nav>
        {
          this.state.mobileNav ?
            <ToggleMenu handleShowPanel={handleShowPanel} active /> :
            <ul>
              <Brand path='home' brandName='Cristian Florea' />
              <ItemList />
              <SocialLinks color links={this.props.links} />
            </ul>
        }
      </nav>
    )
  }
}

export default Navbar;
