import React from 'react'
import HeroOptions from './Hero-Options';

const Hero = (props) => {
  return (
    <header>
      <div class="jumbotron jumbotron-fluid bg-success text-light">
    <div class="container">
      <h1 class="display-4 pt-0">{props.headline}</h1>
      <p class="lead pt-5 pb-5 text-white">The sharing and receiving process only takes <strong>3</strong> simple steps.</p>
    </div>
    <HeroOptions />
  </div>
    </header>
  )
}

export default Hero;
