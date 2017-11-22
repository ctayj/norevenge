import React, { Component } from 'react';
import confusedgallery from './confused gallery cover.jpg'

class Gallery extends Component {

  render(){
    return(
      <div className="Gallery">
        <div className="gallery">
          <p>
            <figure className="gallery-item">
            <img className='resize' src={confusedgallery} />
            <figcaption>CONFUSED</figcaption>
            </figure>
          </p>
        </div>
      </div>
          )

}

}
export default Gallery
