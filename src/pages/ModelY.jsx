import React from 'react'
import Hero from '../hero/Hero'

function ModelY() {
  return (
    <div>
      <Hero
        title="Model Y"
        bgImage="/model-y.jpg"
        bgImageSmall="/model-y-hero.jfif"
        heading1="76cu ft"
        sub1="Cargo Space"
        heading2="330mi"
        sub2="Range(EPA est.)"
        heading3="AWD"
        sub3="Dual Motor"
      />
    </div>
  );
}

export default ModelY