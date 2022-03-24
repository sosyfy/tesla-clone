import React from 'react'
import Hero from '../hero/Hero';

function ModelS() {
  return (
    <div>
      <Hero
        title="Model S"
        bgImage="/model-s.jpg"
        bgImageSmall="/model-s-hero.jfif"
        subTitle='Plaid'
        heading1='396mi'
        sub1='Range(EPA est.)'
        heading2='1.99s'
        sub2='0-60 mph*'
        heading3='200mph'
        sub3= 'Top Speed'
       
      />
    </div>
  );
}

export default ModelS