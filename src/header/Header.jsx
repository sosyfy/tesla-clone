import React, { useState } from 'react'
import {Link} from  'react-router-dom'
import './Header.css'
import { IoIosClose } from "react-icons/io";

function Header() {
 const [openMenu , setOpenMenu] = useState(false)
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
            <li onClick={() => setOpenMenu(!openMenu)}>
              <h4>menu</h4>
            </li>
          </ul>
        </div>
      </div>
      {openMenu && (
        <div className="sidebar">
          <div className="sidebar-items">
            <IoIosClose onClick={() => setOpenMenu(!openMenu)} />
            <div className="mobile">
              <Link onClick={() => setOpenMenu(!openMenu)} to="/models"> Model S </Link>
              <Link onClick={() => setOpenMenu(!openMenu)} to="/model3"> Model 3 </Link>
              <Link onClick={() => setOpenMenu(!openMenu)} to="/modelx"> Model X </Link>
              <Link onClick={() => setOpenMenu(!openMenu)} to="/modely"> Model Y </Link>
              <Link onClick={() => setOpenMenu(!openMenu)} to="/solarroof"> Solar Roof </Link>
              <Link onClick={() => setOpenMenu(!openMenu)} to="/solarpanels"> Solar Panels </Link>
            </div>

            <Link onClick={() => setOpenMenu(!openMenu)} to="/"> Existing Inventory </Link>
            <Link onClick={() => setOpenMenu(!openMenu)} to="/"> Used Inventory </Link>
            <Link onClick={() => setOpenMenu(!openMenu)} to="/"> Trade-in </Link>
            <Link onClick={() => setOpenMenu(!openMenu)} to="/"> Test Drive </Link>
            <Link onClick={() => setOpenMenu(!openMenu)} to="/"> Powerwall </Link>
            <Link onClick={() => setOpenMenu(!openMenu)} to="/"> Commercial Energy </Link>
            <Link onClick={() => setOpenMenu(!openMenu)} to="/"> Utilities </Link>
            <Link onClick={() => setOpenMenu(!openMenu)} to="/"> Charging </Link>
            <Link onClick={() => setOpenMenu(!openMenu)} to="/"> Find US </Link>
            <Link onClick={() => setOpenMenu(!openMenu)} to="/"> Support </Link>
            <Link onClick={() => setOpenMenu(!openMenu)} to="/"> Investor Relations </Link>
            <Link onClick={() => setOpenMenu(!openMenu)} to="/"> Shop </Link>
            <Link onClick={() => setOpenMenu(!openMenu)} to="/"> Account </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header
