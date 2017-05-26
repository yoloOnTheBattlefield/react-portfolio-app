import React from 'react';
// import Scroll from 'react-scroll';

import Hero from './Hero';
import Content from './Content';


// const Link = Scroll.Link;
// const Element = Scroll.Element;
// const Events     = Scroll.Events;
// const scroll     = Scroll.animateScroll;
// const scrollSpy  = Scroll.scrollSpy;

class Landing extends React.Component{
  constructor(props){
    super(props);
    this.state={
      scroll: false
    };
  }

  handleSetActive(to){
    console.log(to);
  }

  render(){
    const { onHeroEnter, onHeroLeave, arrowRunning } = this.props;
    return (
      <div className='Landing'>
        <Hero
          handleSetActive={(to) => this.handleSetActive(to)}
          onHeroEnter={onHeroEnter}
          onHeroLeave={onHeroLeave}
          arrowRunning={arrowRunning}
        />
        <Content />
      </div>
    )
  }
}

export default Landing;
