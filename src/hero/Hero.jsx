import React from "react";
import { Link } from "react-router-dom";
import "./hero.css";

import styled from "styled-components";
function Hero({
  title,
  title2,
  bgImage,
  leftButton,
  rightButton,
  subTitle,
  subTitle2,
  link,
  heading1,
  sub1,
  heading2,
  sub2,
  heading3,
  sub3,
  heading4,
  sub4,
}) {
  return (
    <Wrapper bgImage={bgImage}>
      <div className="hero_components">
        <div className="hero__heading">
          <h1>{title}</h1>
          {title2 && <h1 className="title2">{title2}</h1>}
          <p>
            {subTitle} {link && <a href="tesla.com">Touchless Delivery</a>}
          </p>
          <p className="small">{subTitle2}</p>
        </div>

        {leftButton && (
          <div className="hero__buttons">
            <Link to="/" className="left-button">
              {leftButton}
            </Link>
            {rightButton && (
              <Link to="/" className="right-button">
                {rightButton}
              </Link>
            )}
          </div>
        )}
        {heading1 && (
          <div className="hero__details">
            <div className="hero-info-wrapper">
              {heading1 && 
              <div className="hero-info">
                <h3>{heading1}</h3>
                <p> {sub1}</p>
              </div>}
              {heading2 && 
              <div className="hero-info">
                <h3>{heading2}</h3>
                <p> {sub2}</p>
              </div>}
              {heading3 && 
              <div className="hero-info">
                <h3>{heading3}</h3>
                <p> {sub3}</p>
              </div>}
              {heading4 && 
              <div className="hero-info">
                <h3>{heading4}</h3>
                <p> {sub4}</p>
              </div>}
             
            </div>
            <div className="hero-info">
              <a href="/" className="order-button">
                {" "}
                Order Now{" "}
              </a>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
}

export default Hero;

const Wrapper = styled.div`
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  overflow-x: hidden;
  align-items: center;
  position: relative;
  justify-content: center;
  background-position: center;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  background-repeat: no-repeat;
  background-size: cover;
`;
