import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';

import Logo from '../Images/cross.png';
import './style.css';




function Header() {

  return (
    <nav className="header">

       <div className="brand">
        <p className="logo">LOGO</p>
       </div>


      <div className="user-notification">
      <p className="navlink" to={`/home?oau=true`}>

      <span className="user">
      <FontAwesomeIcon color="white" icon={faUser} size="lg"></FontAwesomeIcon>
      </span>

      </p>



      <p className="navlink" to="#">
         <FontAwesomeIcon icon={faBell} size="lg" color="red"></FontAwesomeIcon>
      </p>
      </div>

    </nav>
  );
}

export default Header;
