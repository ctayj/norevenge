import React, { Component } from 'react';
import confusedgallery from './images/confused gallery cover.jpg';
import Slider from './Slider.js'
class Gallery extends Component {

  render(){
    return(
      <div className="gallery">
            <figure className="gallery-item">
              < a href="/look/confusedlookbook">< img className="thumbnail" src={confusedgallery}/></a>
            </figure>
            <figure className="gallery-item">
              <img className="thumbnail" src={confusedgallery}/>
            </figure>
            <figure className="gallery-item">
              <img className="thumbnail" src={confusedgallery}/>
            </figure>
            <figure className="gallery-item">
              <img className="thumbnail" src={confusedgallery}/>
            </figure>
            <figure className="gallery-item">
              <img className="thumbnail" src={confusedgallery}/>
            </figure>
            <figure className="gallery-item">
              <img className="thumbnail" src={confusedgallery}/>
            </figure>
          </div>
          )


}

}
export default Gallery
