import React from 'react';
import { Navigation2 } from './Navigation2.js';
import { AboutUs } from './AboutUs.js';
import { Mini } from './Mini.js';
import { Categories } from './Categories.js';
export const Side = (props) => {
  return(
    <div>
      <Navigation2 onClick={props.setIsActivePage} />
      { props.activePage === 2 && <AboutUs /> }
      { props.activePage === 3 && <Mini /> }
      { props.activePage === 4 && <Categories /> }
    </div>
  )
}
