import React from 'react'
import Hero from '../hero/Hero'

function HomePage() {
  return (
    <>
      <Hero 
      title="Model 3" 
      bgImage="/model-3.jpg" 
      />
      <Hero 
      title="Model Y" 
      bgImage="/model-y.jpg" 
      />
      <Hero 
      title="Model S" 
      bgImage="/model-s.jpg" 
      />
      <Hero 
      title="Model X" 
      bgImage="/model-x.jpg" 
      />
      <Hero 
      title="Solar Panel" 
      bgImage="/solar-panel.jpg" 
      />
      <Hero 
      title="Solar Roof" 
      bgImage="/solar-roof.jpg" 
      />
      <Hero 
      title="Accessories" 
      bgImage="/accessories.jpg" 
      />
    </>
  );
}

export default HomePage