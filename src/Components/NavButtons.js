import React, { Component } from 'react';

class NavButtons extends Component {

render(){

        return(

            <div className="nav">
              <ul>
                <li><a href= "/home">HOME</a></li>
                <li><a href="/look">LOOK</a></li>
                <li><a href="/obtain">OBTAIN</a></li>

                <div className="contact-btn">
                  <a href='/contact'>CONTACT</a>
                </div>
              </ul>
            </div>
          )

}

}
export default NavButtons;
