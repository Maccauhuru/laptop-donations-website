import React from 'react';
import HeroOptions from './Hero-Options';



const Hero = (props) => {
  return (
    <div className="bg-dark text-white">
      <h2>{props.headline}</h2>
      <HeroOptions />
    </div>
  )
}

export default Hero;