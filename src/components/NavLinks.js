import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinks = () => {
  return (
    <div id='nav'>
        <NavLink to='/today' exact className='menu-item'>Today</NavLink>
        <NavLink to='/tomorrow' exact className='menu-item'>Tomorrow</NavLink>
        <NavLink to='/all-tasks' exact className='menu-item'>All Open Tasks</NavLink>
        <NavLink to='/all-days' exact className='menu-item'>All Days</NavLink>
        <div className="line"></div>
        <NavLink to='/help' exact className='menu-item'>Help</NavLink>
        <NavLink to='/about' exact className='menu-item'>About</NavLink>
    </div>
  )
}

export default NavLinks