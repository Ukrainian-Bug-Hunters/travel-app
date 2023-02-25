import React from 'react';
import heroImg from '~/img/HeroImg.jpg';

const Hero = () => {
    return (
        <div>
            <p>Hello</p>
            <img src={heroImg} alt='HeroImg'></img>
        </div>
    );
};

export default Hero;