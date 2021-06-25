import React from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'

const NavLinks = () => {
  return (
    <div id='nav'>
        <NavLink to='/today' exact className='menu-item'>Today</NavLink>
        <NavLink to='/tomorrow' exact className='menu-item'>Tomorrow</NavLink>
        <div className="line"></div>
        <NavLink to='/help' exact className='menu-item'>Help</NavLink>
        <NavLink to='/about' exact className='menu-item'>About</NavLink>
    </div>
  )
}

export default NavLinks