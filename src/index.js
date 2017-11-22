import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import NavButtons from './Components/NavButtons'
import Gallery from './Components/Gallery'


ReactDOM.render(

  <BrowserRouter>
  <div>
    <Route path ="/" component= {NavButtons} />
    <Route exact path ="/home" component ={App}/>
    <Route path= "/look" component = {Gallery} />
  </div>
  </BrowserRouter> ,document.getElementById('root'));
