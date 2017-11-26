import React, { Component } from 'react';
// import FontAwesome from 'react-fontawesome'
import rightarrowpng from './images/right-arrow-png-31.png'

const RightArrow = (props) => {
  return (
    <div onClick={props.nextSlide} className="nextArrow">
      <img src={rightarrowpng}/>
    </div>
  );
}

export default RightArrow;
