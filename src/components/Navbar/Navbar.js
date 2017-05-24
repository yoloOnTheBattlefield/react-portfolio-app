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
      showMenu: false,
      mobileNav: false,
      mounted: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.mobileNav = this.mobileNav.bind(this);
  }

  handleClick(){
    this.setState({
      showMenu: this.state.showMenu ? false : true
    })
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

  componentWillUnmount() {
    this._mounted = false;
  }

  render(){
    return(
      <nav>
        {
          this.state.mobileNav ?
            <ToggleMenu active /> :
            <ul>
              <Brand path='home' brandName='Cristian Florea' />
                <div className='nav-items'>
                  <Item handleClick={this.handleClick} path='code' caps={true}/>
                  <Item handleClick={this.handleClick} path='about' caps={true}/>
                  <Item handleClick={this.handleClick} path='contact' caps={true}/>
                </div>
                <SocialLinks color links={this.props.links} />
            </ul>
        }
      </nav>
    )
  }
}

export default Navbar;
