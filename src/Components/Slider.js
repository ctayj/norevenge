import React, { Component } from 'react';
import Slide1 from './Slide1.js';
import Slide2 from './Slide2.js';
import Slide3 from './Slide3.js';
import Slide4 from './Slide4.js';
import Slide5 from './Slide5.js';
import Slide6 from './Slide6.js';
import Slide7 from './Slide7.js';
import Slide8 from './Slide8.js';
import Slide9 from './Slide9.js';
import Slide10 from './Slide10.js';
import Slide11 from './Slide11.js';
import Slide12 from './Slide12.js';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slideCount: 1
    }

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  render() {

    if (this.state.slideCount === 1){
        return(
          <div className="slider">

            { this.state.slideCount === 1 ? <Slide1 /> : null }
            { this.state.slideCount === 2 ? <Slide2 /> : null }
            { this.state.slideCount === 3 ? <Slide3 /> : null }
            { this.state.slideCount === 4 ? <Slide4 /> : null }
            { this.state.slideCount === 5 ? <Slide5 /> : null }
            { this.state.slideCount === 6 ? <Slide6 /> : null }
            { this.state.slideCount === 7 ? <Slide7 /> : null }
            { this.state.slideCount === 8 ? <Slide8 /> : null }
            { this.state.slideCount === 9 ? <Slide9 /> : null }
            { this.state.slideCount === 10 ? <Slide10 /> : null }
            { this.state.slideCount === 11 ? <Slide11 /> : null }
            { this.state.slideCount === 12 ? <Slide12 /> : null }

            <RightArrow nextSlide={this.nextSlide} />


          </div>

        )
    }

    if (this.state.slideCount === 12){
      return(
        <div className="slider">

        { this.state.slideCount === 1 ? <Slide1 /> : null }
        { this.state.slideCount === 2 ? <Slide2 /> : null }
        { this.state.slideCount === 3 ? <Slide3 /> : null }
        { this.state.slideCount === 4 ? <Slide4 /> : null }
        { this.state.slideCount === 5 ? <Slide5 /> : null }
        { this.state.slideCount === 6 ? <Slide6 /> : null }
        { this.state.slideCount === 7 ? <Slide7 /> : null }
        { this.state.slideCount === 8 ? <Slide8 /> : null }
        { this.state.slideCount === 9 ? <Slide9 /> : null }
        { this.state.slideCount === 10 ? <Slide10 /> : null }
        { this.state.slideCount === 11 ? <Slide11 /> : null }
        { this.state.slideCount === 12 ? <Slide12 /> : null }

        <LeftArrow previousSlide={this.previousSlide} />

      </div>
      )
    }


    return (
      <div className="slider">

        { this.state.slideCount === 1 ? <Slide1 /> : null }
        { this.state.slideCount === 2 ? <Slide2 /> : null }
        { this.state.slideCount === 3 ? <Slide3 /> : null }
        { this.state.slideCount === 4 ? <Slide4 /> : null }
        { this.state.slideCount === 5 ? <Slide5 /> : null }
        { this.state.slideCount === 6 ? <Slide6 /> : null }
        { this.state.slideCount === 7 ? <Slide7 /> : null }
        { this.state.slideCount === 8 ? <Slide8 /> : null }
        { this.state.slideCount === 9 ? <Slide9 /> : null }
        { this.state.slideCount === 10 ? <Slide10 /> : null }
        { this.state.slideCount === 11 ? <Slide11 /> : null }
        { this.state.slideCount === 12 ? <Slide12 /> : null }

        <RightArrow nextSlide={this.nextSlide} />
        <LeftArrow previousSlide={this.previousSlide} />

      </div>
    );

  }

  // I have ocd sometimes and put my functions below the JSX. You can put them above if you'd like.
  nextSlide() {
      this.setState({ slideCount: this.state.slideCount + 1 })
  }

  previousSlide() {
      this.setState({ slideCount: this.state.slideCount - 1 })
  }
}
