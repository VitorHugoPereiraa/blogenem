import React from 'react';

import './style.css';
import Card from './Card'

function Youtube() {
    return (
        <>
            <span className='youtube-title'>
                <h2>ASSISTA :</h2>
            </span>
            <section className='youtube-section'>
                <Card url='https://www.youtube.com/embed/RB_F9CoLZdM' />
                <Card url='https://www.youtube.com/embed/6Ug32AjUnzc' />
                <Card url='https://www.youtube.com/embed/vJnmeVIajds' />
                <Card url='https://www.youtube.com/embed/yt1chLlw3_c' />
                <Card url='https://www.youtube.com/embed/V6gMxEnOGvI' />
                <Card url='https://www.youtube.com/embed/0W39xeNbTDI' />
            </section>
        </>
    )
}

export default Youtube;