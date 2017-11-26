
import box1 from './images/box1.JPG'
import box2 from './images/box2.JPG'
import box3 from './images/box3.JPG'
import please1 from './images/please1.JPG'
import please2 from './images/please2.JPG'
import please3 from './images/please3.JPG'
import jesus1 from './images/jesus1.JPG'
import jesus2 from './images/jesus2.JPG'
import jesus3 from './images/jesus 3.JPG'
import bayard1 from './images/bayard1.JPG'
import bayard2 from './images/bayard2.JPG'
import bayard3 from './images/bayard3.JPG'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

class MyComponent extends React.Component {

  render() {

    const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ]

    return (
      <div className="Gallery">
        <div className="gallery">
          <p>
            <ImageGallery items={images} />
          </p>
        </div>
      </div>
    );

  }

}

export default MyComponent
