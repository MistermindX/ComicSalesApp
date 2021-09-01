import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <h4>ComicSalesApp</h4>
      <div>
        <NavLink to="/">Login</NavLink>
        <NavLink to="/comics">Comics</NavLink>
        <NavLink to="/new">New Comic</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
