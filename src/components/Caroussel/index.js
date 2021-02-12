import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'

import './style.css';

import enem1 from '../../assets/img/enem1.jpg'
import enem2 from '../../assets/img/enem2.jpg'
import enem3 from '../../assets/img/enem3.jpg'

function Caroussel() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className='div-caroussel'>
      <Carousel activeIndex={index} onSelect={handleSelect} className='caroussel-main'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={enem1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={enem2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={enem3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>

  );
}

export default Caroussel;