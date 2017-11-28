import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import sampleproducts from './../sampleproducts.json'
import './../css/productpage.css';

class ProductPage extends Component{


  constructor(props){
    super(props);
    this.state={ products: sampleproducts.products}

  }

    render(){

      return(

        <div className="gallery">

        {this.state.products.map(function(item){
          var url = item.img_url[0]
            return(

                //images must be in public folder
                  <figure className="gallery-item">
                  <Link to={'obtain/' + item.id} params={{item: {item}}}><img src={url} alt="404"/></Link>
                  <center><p>{item.id}</p></center>
                  </figure>

            );
        })}

        </div>
      )
    }

}

export default ProductPage;
