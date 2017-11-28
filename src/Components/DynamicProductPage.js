import React, { Component } from 'react';
import sampleproducts from './../sampleproducts.json'

import * as ReactBootstrap from 'react-bootstrap';
var DropdownButton = ReactBootstrap.DropdownButton;
var MenuItem = ReactBootstrap.MenuItem;
var ToggleButton = ReactBootstrap.ToggleButton;
var ToggleButtonGroup = ReactBootstrap.ToggleButtonGroup;
var Button = ReactBootstrap.Button;


export default class DynamicProductPage extends Component {


  componentWillMount(){


  }
  render() {
    var key = this.props.match.params.id;
    var size;

    return (
      <div className='shop'>
      {sampleproducts.products.map(function(product){
        //if parameter id is the same as the id of any product in the json, return it.
        if(key === product.id)
        return(
          <div>
          <div id="shop-images">
          {product.img_url.map(function(url){
            return(
              <div>
              <img src={'../'+ url} alt="404"/><p></p>
              </div>
            );
          })}
          </div>

          <div id="shop-text">
          {product.description}<p></p>
          <ToggleButtonGroup  type="checkbox" title = "Size">
          <ToggleButton value={1} disabled={product.S<=0} onClick={()=>{if(product.S>0){size="Small";console.log(size);}}}>Small</ToggleButton><p></p>
          <ToggleButton value={2} disabled={product.M<=0} onClick={()=>{if(product.M>0){size="Medium";console.log(size);}}}>Medium</ToggleButton><p></p>
          <ToggleButton value={3} disabled={product.L<=0} onClick={()=>{if(product.L>0){size="Large"}}}>Large</ToggleButton><p></p>
          <ToggleButton value={4} disabled={product.XL<=0} onClick={()=>{if(product.XL>0){size="XL"}}}>Extra Large</ToggleButton><p></p>
          </ToggleButtonGroup>
          </div>
          </div>
        );
      })}
      </div>
    );
  }
}
