import React from 'react';
import Scrollchor from 'react-scrollchor';
import './AboutUs.css';
import about from './pic/aboutus.jpg';
export const AboutUs = () =>{
  return(
    <div className="main">
      <div className="header2">
        <div className="block4">
          <div className="whowe">
          <p className="who">Кто мы такие?</p>
        </div>
        <div className="whowe1">
        </div>
        <div className="whowe2">
          <p className="whowe2">О НАС</p>
        </div>
        </div>
        <div className="block5">
          <img src={about} className="image1"/>
        </div>
        <div className="block6">
          <div className="odeshka">
            <p className="odeshkaword">ODESHKA</p>
          </div>
          <div className="infoblock">
          <p className="info"> - это место,где ты сможешь:</p>
          </div>
          <p className="info1">Найти дешёвые аналоги дорогих и брендовых образов;</p>
          <p className="info2">Подобрать образ к уже имеющимся вещам;</p>
          <p className="info3">Сыграть в мини-игру,которая может помочь тебе в самостаятельном выборе одежды.</p>
        </div>
        <div className="picture>">

        </div>
        <div className="block7">
          <p id="perehod" className="somethingaboutstyle">И всё это будет выполено в твоём любимом стиле!</p>
        </div>
      </div>
    </div>
  )
}
