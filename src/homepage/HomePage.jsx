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
        bgImageSmall="model-3-hero.jfif"
        leftButton="Custom order"
        rightButton="Existing Inventory"
      />
      <Hero
        title="Model Y"
        subTitle="Order online for"
        link="Touchless Delivery"
        bgImage="/model-y.jpg"
        bgImageSmall="model-y-hero.jfif"
        leftButton="Custom order"
        rightButton="Existing Inventory"
      />
      <Hero
        title="Model S"
        subTitle="Order online for"
        link="Touchless Delivery"
        bgImage="/model-s.jpg"
        bgImageSmall="/model-s-page.jfif"
        leftButton="Custom order"
        rightButton="Existing Inventory"
      />
      <Hero
        title="Model X"
        subTitle="Order online for"
        link="Touchless Delivery"
        bgImage="/model-x.jpg"
        bgImageSmall="/model-x-page.jfif"
        leftButton="Custom order"
        rightButton="Existing Inventory"
      />
      <Hero
        title="Solar Panel"
        subTitle="Lowest Cost Solar Panels in America"
        bgImage="/solar-panel.jpg"
        bgImageSmall="/solar-panel-hero.jpg"
        leftButton="Order Now"
        rightButton="Learn More"
      />
      <Hero
        title="Solar Roof"
        subTitle="Produce Clean Energy From Your Roof"
        bgImage="/solar-roof.jpg"
        bgImageSmall="/solar-roof-hero.jfif"
        leftButton="Order Now"
        rightButton="Learn More"
      />
      <Hero
        title="Accessories"
        bgImage="/accessories.jpg"
        bgImageSmall="/Mobile-Accessories.jfif"
        leftButton="order now"
      />
    </>
  );
}

export default HomePage