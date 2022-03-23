import React from 'react'
import {Link} from  'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div className="header">
      <div className="flex">
        <div className="header__logo">
          <Link to="/">
            <img
              className="Header__logo-img"
              src="/images/logo.svg"
              alt="logo"
            />
          </Link>
        </div>
        <div className="header__models">
          <ul>
            <li>
              <Link to="/models"> Model S </Link>
            </li>
            <li>
              <Link to="/model3"> Model 3 </Link>
            </li>
            <li>
              <Link to="/modelx"> Model X </Link>
            </li>
            <li>
              <Link to="/modely"> Model Y </Link>
            </li>
            <li>
              <Link to="/solarroof"> Solar roof </Link>
            </li>
            <li>
              <Link to="/solarpanels"> Solar Panels </Link>
            </li>
          </ul>
        </div>
        <div className="header__menu">
          <ul>
            <li>
              <Link to="/shop"> Shop </Link>
            </li>
            <li>
              <Link to="/account"> Account </Link>
            </li>
            <li>
              <h4>menu</h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header