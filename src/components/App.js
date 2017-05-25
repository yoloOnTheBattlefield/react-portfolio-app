import React from 'react';
import Navbar from './Navbar/Navbar';
import AltNav from './Navbar/AltNav';
import NavPanel from './Navbar/NavPanel';

import social_links from './social_links';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      showNavbar: false,
      showPanel: false,
      inView: false,
      toggleButton: false
    };
    this.onLeave = this.onLeave.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.handleShowPanel = this.handleShowPanel.bind(this);
  }

  onLeave(){
    this.setState({
      showNavbar: true,
      inView: false,
    });
  }

  onEnter(){
    this.setState({
      showNavbar: false,
      inView: true,
    });
  }

  handleShowPanel(){
    console.log('toggle menu is clicked', this.state.showPanel);
    this.setState({
      showPanel: this.state.showPanel ? false : true
    })
  }

  selected(){
    console.log('selected')
  }

  render(){
    console.log('state was rerender', this.state.showPanel);
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        onLeave: this.onLeave,
        onEnter: this.onEnter
      })
    );
    const { showPanel } = this.state;
    return(
      <div className='App'>
        {
          this.state.showNavbar ?
            <Navbar
              links={social_links}
              handleShowPanel={this.handleShowPanel}
            /> : <div></div>
        }
        { childrenWithProps }
      </div>
    )
  }
}

export default App;
