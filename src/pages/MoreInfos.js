import React from 'react';

import './style.css';

import Navbar from '../components/Navbar'
import ContentMore from '../components/ContentMore'
import Covid from '../components/Covid'

function More() {
  return (
    <div className='more'>
      <Navbar />
      <ContentMore />
      <Covid />
    </div>
  );
}

export default More;