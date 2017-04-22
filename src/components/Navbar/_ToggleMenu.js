import React from 'react';

const ToggleMenu = (props) => {

  return (
    <div className={'toggle-menu ' + props.class} onClick={props.handleClick}>
      <div className='line top'></div>
      <div className='line middle'></div>
      <div className='line bottom'></div>
    </div>
  )
}

export default ToggleMenu;
