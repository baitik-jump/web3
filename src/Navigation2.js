import React from 'react';

export const Navigation2 = (props) => {
  return (
    <div className="navigation">
      <div>
        <div onClick={() => props.onChange(1)}>O D E S H K A</div>|
        <div onClick = {() => props.onChange(2)}>Категории</div> |
        <div onClick={() => props.onChange(3)}>О нас</div> |
        <div onClick={() => props.onChange(4)}>Мини игры</div>
      </div>
    </div>
  )
}
