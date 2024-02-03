import React from 'react'
import './nav.css'
import { Link,NavLink } from 'react-router-dom'

const Nav = () => {
  return (

    <div className='main-container'>
        <nav>
        <Link to="/" className="title">
          <img src='./assets/logo-spice.png' className='logo' alt='logo'/>
        </Link>

        <ul>
          <li>
            <NavLink to="/">Hotels</NavLink>
          </li>

          <li>
            <NavLink to="/login">Deals</NavLink>
          </li>

          <li>
            <NavLink to="/signup">Gift Card</NavLink>
          </li>

          <li>
            <NavLink to="/signup">SpiceClub</NavLink>
          </li>

          <li>
            <NavLink to="/signup">SpiceScreen</NavLink>
          </li>

          <li>
            <NavLink to="/signup">Taxi</NavLink>
          </li>

          <li>
            <NavLink to="/signup">Cargo</NavLink>
          </li>

          <li>  
            <NavLink to="/signup">Login </NavLink>
          </li>

          <li>
            <NavLink to="/signup">SignUp</NavLink>
          </li>

        </ul>
      </nav>
  </div>
  )
}

export default Nav