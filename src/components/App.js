import React from 'react';
import Navbar from './Navbar/Navbar';

import social_links from './social_links';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      showNavbar: false,
      inView: false,
      toggleButton: false,
      mobileNav: 860
    };
    this.onHeroLeave = this.onHeroLeave.bind(this);
    this.onHeroEnter = this.onHeroEnter.bind(this);
    this.mobileNav = this.mobileNav.bind(this);
  }

  onHeroLeave(){
    this.setState({
      showNavbar: true,
      inView: false,
    });
  }

  onHeroEnter(){
    this.setState({
      showNavbar: false,
      inView: true,
    });
  }


  selected(){
    console.log('selected');
  }

  mobileNav(){
    this.setState({
      mobileNav: window.innerWidth < 860 ? true : false
    });
  }
  componentDidMount(){
    this.mobileNav();
    window.addEventListener('resize', this.mobileNav);
  }

  render(){
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        onHeroLeave: this.onHeroLeave,
        onHeroEnter: this.onHeroEnter,
        arrowRunning: this.state.showNavbar
      })
    );
    return(
      <div className='App'>
        <Navbar
          links={social_links}
          show={this.state.showNavbar}
          mobileNav={this.state.mobileNav}
        />
        { childrenWithProps }
      </div>
    )
  }
}

export default App;
