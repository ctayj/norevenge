import React, { Component } from 'react'
import Slider from './Sliders/Slider'

require('./Sliders/sliderstyle.scss')

export default class SliderApp extends Component {
  render() {
    return (
      <div className="app">
        <Slider/>
      </div>
    )
  }
}
