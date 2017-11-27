import React from 'react';
// import FontAwesome from 'react-fontawesome'
import rightarrowpng from './../images/right-arrow-png-31.png'

const RightArrow = (props) => {
  return (
    <div onClick={props.nextSlide} className="nextArrow">
      <img src={rightarrowpng} alt="404"/>
    </div>
  );
}

export default RightArrow;
