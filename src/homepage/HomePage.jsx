import React from 'react'
import Hero from '../hero/Hero'

function HomePage() {
  return (
    <>
      <Hero
        title="Model 3"
        subTitle="Order online for"
        link="Touchless Delivery"
        bgImage="/model-3.jpg"
        leftButton="Custom order"
        rightButton="Existing Inventory"
      />
      <Hero
        title="Model Y"
        subTitle="Order online for"
        link="Touchless Delivery"
        bgImage="/model-y.jpg"
        leftButton="Custom order"
        rightButton="Existing Inventory"
      />
      <Hero
        title="Model S"
        subTitle="Order online for"
        link="Touchless Delivery"
        bgImage="/model-s.jpg"
        leftButton="Custom order"
        rightButton="Existing Inventory"
      />
      <Hero
        title="Model X"
        subTitle="Order online for"
        link="Touchless Delivery"
        bgImage="/model-x.jpg"
        leftButton="Custom order"
        rightButton="Existing Inventory"
      />
      <Hero
        title="Solar Panel"
        subTitle="Lowest Cost Solar Panels in America"
        bgImage="/solar-panel.jpg"
        leftButton="Order Now"
        rightButton="Learn More"
      />
      <Hero
        title="Solar Roof"
        subTitle="Produce Clean Energy From Your Roof"
        bgImage="/solar-roof.jpg"
        leftButton="Order Now"
        rightButton="Learn More"
      />
      <Hero
        title="Accessories"
        bgImage="/accessories.jpg"
        leftButton="order now"
      />
    </>
  );
}

export default HomePage