import React from 'react'
import MenuItem from './MenuItem'
import styled from 'styled-components'

function Menu() {
  return (
    <SideBar>
        <MenuItem title=" Model S"/>
    </SideBar>
  )
}

export default Menu

const SideBar = styled.div`
   position:fixed ;
   overflow-y : scroll;
   z-index: 200;
   top: 0;
   bottom:0 ;
   right: 0:
   padding: 7rem 2rem 2rem 0;
   background-color: white;
   
   

`
