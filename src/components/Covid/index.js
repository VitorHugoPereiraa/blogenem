import React from 'react';

import './style.css';

import Card from '../Youtube/Card'

function Covid() {
  return (
    <>
      <span className='youtube-title'>
        <h2>CUIDADOS COM O COVID 19:</h2>
      </span>
      <section className='youtube-section'>
        <Card url='https://www.youtube.com/embed/LwUjglzIUhc' />
        <Card url='https://www.youtube.com/embed/uE3tCPcckeE' />
        <Card url='https://www.youtube.com/embed/UeQyLgn_M2c' />
        <Card url='https://www.youtube.com/embed/oloC4q1aHus' />
        <Card url='https://www.youtube.com/embed/3dfzUp33Ugg' />
        <Card url='https://www.youtube.com/embed/H5DfCJA24aQ' />
      </section>
    </>
  );
}

export default Covid;