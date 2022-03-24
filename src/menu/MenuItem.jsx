import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function MenuItem({link , title}) {
  return (
    <MenuItems>
      <Link to={link}>{title}</Link>
    </MenuItems>
  )
}

export default MenuItem

const MenuItems = styled.div`
    border-bottom: 1px solid #d0d1d2 ;
    text-align: left ;
    cursor: pointer ;

    a {
        font-weight:500 ;
        letter-spacing : 0.5px;
        text-transform: uppercase;
        padding_bottom: 15px ;
        font-size: 1.5rem ;
        cursor: pointer ;
    }
`