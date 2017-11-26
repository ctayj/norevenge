import React, { Component } from 'react';
import countdown from './countdown crop and cut.mp4'



export default class Comingsoon extends Component {
  render() {
    return (
      <div className='announcement'>
        <h1> coming soon </h1>
        <video  id="video-background" autoPlay="true" loop muted={ this.props.muted }>
          <source src={countdown} type="video/mp4" data-reactid=".0.1.0.0.0"/>
        </video>
      </div>
    );
  }
}
