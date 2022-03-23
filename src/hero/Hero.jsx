import React from 'react'
// import { Link } from 'react-router-dom'
import './hero.css'

import styled from 'styled-components'
function Hero({title, bgImage}) {
  
  return (
    <Wrapper bgImage={bgImage}>
      <div className="hero_components">
        <div className="hero__heading">
          <h1>{title}</h1>
          {/* <h3>
            Order online for <a href="tesla.com">Touchless Delivery</a>
          </h3> */}
        </div>
        {/* <div className="hero__buttons">
          <Link to="/">custom order</Link>
          <Link to="/">existing inventory</Link>
        </div> */}
      </div>
    </Wrapper>
  );
}

export default Hero

const Wrapper = styled.div`
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  position: relative;
  justify-content:center;
  background-position: center;
  background-image: ${props =>`url("/images/${props.bgImage}")` };
  background-repeat: no-repeat;
  background-size: cover;
`;