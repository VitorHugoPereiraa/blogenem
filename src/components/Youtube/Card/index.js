import React from 'react';

import './style.css';

function Card(props) {
  return (
          <iframe className='card-main' width="150" height="120" src={props.url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  );
}

export default Card;