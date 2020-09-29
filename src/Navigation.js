import React from 'react';
import Scrollchor from 'react-scrollchor';

// <img src={img1} className="image" />

export const Navigation = (props) => {
  return (
    <div className="navigation">
      <div>

        <div className="aboutustext" onClick = {() => props.onClick(2)}>О нас</div>
        <Scrollchor to='second'>
          <div className="aboutustext1">Категории</div>
        </Scrollchor>
        <div className="aboutustext2" onClick = {() => props.onClick(3)}>Мини-игра</div>
        <div className="positfix"></div>
        <div className="logo">
          <div className="logotext" onClick = {() => props.onClick(1)}>O D E S H K A</div>
        </div>
      </div>
    </div>
  )
}
