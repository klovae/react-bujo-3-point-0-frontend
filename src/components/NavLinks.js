import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinks = () => {
  return (
    <div id='nav'>
        <NavLink to='/all-tasks' exact className='menu-item'>All Open Tasks</NavLink>
        <NavLink to='/days' exact className='menu-item'>All Days</NavLink>
        <div className="line"></div>
        <NavLink to='/help' exact className='menu-item'>Help</NavLink>
        <NavLink to='/about' exact className='menu-item'>About</NavLink>
    </div>
  )
}

export default NavLinks