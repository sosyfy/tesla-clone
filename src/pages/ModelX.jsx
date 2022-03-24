import React from 'react'
import Hero from '../hero/Hero'

function ModelX() {
  return (
    <div>
      <Hero
        title="Model X"
        bgImage="/model-x.jpg"
        bgImageSmall="/model-x-hero.jfif"
        subTitle="Plaid"
        heading1="333mi"
        sub1="Range(EPA est.)"
        heading2="2.5s"
        sub2="0-60 mph*"
        heading3="9.9s"
        sub3="1/4 Mile"
      />
    </div>
  );
}

export default ModelX