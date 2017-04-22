import React from 'react';
import Navbar from './Navbar/Navbar';

import social_links from './social_links';

const App = ({children}) => {
  return(
    <div className='app'>
      <Navbar links={social_links}/>
      {children}
    </div>
  )
}

export default App;
