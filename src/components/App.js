import React from 'react';
import Navbar from './Navbar/Navbar';
import AltNav from './Navbar/AltNav';

import social_links from './social_links';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      showNavbar: false,
      inView: false
    };
    this.handleLeave = this.handleLeave.bind(this);
    this.onEnter = this.onEnter.bind(this);
  }

  handleLeave(){
    this.setState({
      showNavbar: true,
      inView: false
    });
  }

  onEnter(){
    this.setState({
      showNavbar: false,
      inView: true
    })
  }

  render(){
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        handleLeave: this.handleLeave,
        onEnter: this.onEnter
      })
    );
    return(
      <div className='App'>
        {this.state.showNavbar ? <Navbar links={social_links}/> : <AltNav />}
        {childrenWithProps}
      </div>
    )
  }
}

export default App;
