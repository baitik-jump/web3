import React from 'react';
import Scrollchor from 'react-scrollchor';
import { Navigation } from './Navigation';
import './FirstPage.css';
import lol from './pic/lol.jpg';

export const FirstPage = (props) => {
  return (
    <div className="header">
      <img src={lol} className="image" />

      <div className="block">
        <div className="block1">
          <p>Ищешь место,которое поможет тебе в выборе одежды?</p>
        </div>
        <div className="block2">
          <p className="block2text">Ты пришёл по адресу!</p>
        </div>


        <div className="block3">
          <Scrollchor to='second'>
            <div className="block3text">Попробовать!</div>
          </Scrollchor>
        </div>
        </div>
      </div>

  )
}
