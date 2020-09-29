import React, { useState } from 'react'
import { FirstPage } from './FirstPage';
import { Categories } from './Categories.js';
import { Navigation } from './Navigation';

export const Main = (props) => {
  return(
    <div>
      <Navigation onClick={props.setIsActivePage} />
      <FirstPage/>
      <div id="second">
        <Categories/>
      </div>
    </div>
  )
}
