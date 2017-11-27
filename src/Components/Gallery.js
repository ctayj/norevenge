import React, { Component } from 'react';
import confusedgallery from './images/confused gallery cover.jpg';
class Gallery extends Component {

  render(){
    return(
      <div className="gallery">
            <figure className="gallery-item">
              < a href="/look/confusedlookbook">< img className="thumbnail" src={confusedgallery} alt="404"/></a>
            </figure>
            <figure className="gallery-item">
              <img className="thumbnail" src={confusedgallery} alt="404"/>
            </figure>
            <figure className="gallery-item">
              <img className="thumbnail" src={confusedgallery} alt="404"/>
            </figure>
            <figure className="gallery-item">
              <img className="thumbnail" src={confusedgallery} alt="404"/>
            </figure>
            <figure className="gallery-item">
              <img className="thumbnail" src={confusedgallery} alt="404"/>
            </figure>
            <figure className="gallery-item">
              <img className="thumbnail" src={confusedgallery} alt="404"/>
            </figure>
          </div>
          )


}

}
export default Gallery
