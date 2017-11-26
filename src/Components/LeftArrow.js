import React, { Component } from 'react';
import leftarrowpng from './images/left-arrow-png-31.png'

const LeftArrow = (props) => {
  return (
    <div onClick={props.previousSlide} className="backArrow">
      <img src={leftarrowpng}/>
    </div>
  );
}

export default LeftArrow;
