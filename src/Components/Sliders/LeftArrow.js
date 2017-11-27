import React from 'react';
import leftarrowpng from './../images/left-arrow-png-31.png'

const LeftArrow = (props) => {
  return (
    <div onClick={props.previousSlide} className="backArrow">
      <img src={leftarrowpng} alt="404"/>
    </div>
  );
}

export default LeftArrow;
