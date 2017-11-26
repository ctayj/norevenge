import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import NavButtons from './Components/NavButtons'
import Gallery from './Components/Gallery'
import SliderApp from './Components/SliderApp'
import Comingsoon from './Components/comingsoon'
import Contactinfo from './Components/Contactinfo'

ReactDOM.render(

  <BrowserRouter>
  <div>
    <Route path ="/" component= {NavButtons} />
    <Route exact path ="/" component= {App} />
    <Route exact path ="/home" component ={App}/>
    <Route exact path= "/look" component = {Gallery} />
    <Route exact path= "/look/confusedlookbook" component = {SliderApp} />
    <Route exact path= "/obtain" component = {Comingsoon} />
    <Route exact path= "/contact" component = {Contactinfo} />
  </div>
  </BrowserRouter> ,document.getElementById('root'));
