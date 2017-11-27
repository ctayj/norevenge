import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './css/index.css';
import Intro from './Intro';
import NavButtons from './Components/NavButtons'
import Gallery from './Components/Gallery'
import SliderApp from './Components/SliderApp'
import Comingsoon from './Components/comingsoon'
import Contactinfo from './Components/Contactinfo'
import  ProductPage from './Components/ProductPage'

ReactDOM.render(

  <BrowserRouter>
  <div>
    <Route path ="/" component= {NavButtons} />
    <Route exact path ="/" component= {Intro} />
    <Route exact path ="/home" component ={Intro}/>
    <Route exact path= "/look" component = {Gallery} />
    <Route exact path= "/look/confusedlookbook" component = {SliderApp} />
    <Route exact path= "/obtain" component = {Comingsoon} />
    <Route exact path = "/shop" component = {ProductPage}/>
    <Route exact path= "/contact" component = {Contactinfo} />
  </div>
  </BrowserRouter> ,document.getElementById('root'));
