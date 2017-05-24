import React from 'react';
import ToggleMenu from './_ToggleMenu';

const AltNav =  ({ handleShowPanel, toggleMenu }) => {
  return(
    <ToggleMenu
      handleShowPanel={handleShowPanel}
      toggleMenu={toggleMenu}
    />
  )
}

export default AltNav;
