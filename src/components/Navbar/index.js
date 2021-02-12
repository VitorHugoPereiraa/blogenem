import React from 'react';

import './style.css';

import Logo from '../../assets/img/logo.png'

function Navbar() {
  return (
    <nav className="div-navbar">
      <span className='span-navbar'>
        <a href='/' className='link-home'>
          <span className='text-navbar'>SOMOS</span>
          <img className='navbar-logo' src={Logo} alt="logo" />
          <span className='text-navbar'>NAUTAS</span>
        </a>
      </span>
    </nav>
  );
}

export default Navbar;