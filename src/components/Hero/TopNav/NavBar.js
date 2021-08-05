import React, { useState } from 'react';
import './NavBar.css';
import Logo from '../../../content/Logo.svg';
function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav className='container'>
        <div className='logo'>
          <img className='logoimage' src={Logo} alt='Jadoo Logo' />
        </div>
        <ul
          className='nav-links'
          style={{ transform: open ? 'translateX(0px)' : '' }}
        >
          <li>
            <a href='#service_page'>Destinations</a>
          </li>
          <li>
            <a href='#'>Hotels</a>
          </li>
          <li>
            <a href='#'>Flights</a>
          </li>
          <li>
            <a href='#'>Bookings</a>
          </li>
          <li>
            <a href='#'>Login</a>
          </li>
          <li>
            <button href='#' className='navbutton'>
              Sign up
            </button>
          </li>
          <li>
            <select id='language' name='language' className='navdropdown'>
              <option value='EN'>EN</option>
            </select>
          </li>
        </ul>
        <i onClick={() => setOpen(!open)} className='fas fa-bars burger'></i>
      </nav>
    </div>
  );
}

export default NavBar;
