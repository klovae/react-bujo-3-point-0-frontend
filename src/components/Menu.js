import React from 'react'
import logo from '../images/bujo_logo_30.png'
import NavLinks from './NavLinks'

const Menu = () => {
  return (
    <div id='nav-wrap'>
      <img src={logo} alt='bujo 3.0 logo' id='logo'></img>
      <NavLinks />
    </div>
  )
}

export default Menu