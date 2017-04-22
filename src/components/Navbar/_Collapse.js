import React from 'react';

const Collapse = (props) => {
  return(
    <div className={'collapse ' + props.class}>
      {props.children}
    </div>
  )
}

export default Collapse;
