import React from 'react'
import { Link , NavLink} from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='header navbar bg-white'>
        <div className='navbar-logo col-7'>
           <Link  className='navbar-link' to='/home'>
              <img src='#' alt='SiteLogo'/>
           </Link>
        </div>
        <div className='navabr-right col-5 container'>
            <div className='navbar-right-home  '>
                <NavLink className='navbar-link' to='/home'>Home</NavLink>
            </div>
           <div className='navbar-right-team'>
               <NavLink className='navbar-link' to='/team'>Team</NavLink>
           </div>
           <div className='navbar-right-events'>
               <NavLink className='navbar-link' to='/events'>Events</NavLink>
           </div>
           <div className='navbar-right-about'>
               <NavLink className='navbar-link' to='/about'>About Us</NavLink>
           </div>
           <div className='navbar-right-contact'>
               <NavLink className='navbar-link' to='/contact'>Contact Us</NavLink>
           </div>
           <div className='navbar-right-login'>
               <NavLink className='navbar-link' to='/login'>Login</NavLink>
           </div>
        </div>
        
    </div>
  )
}

export default Navbar