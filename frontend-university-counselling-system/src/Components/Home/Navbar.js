import React from 'react'
import { Link , NavLink} from 'react-router-dom'
import './Navbar.css';
import { IoIosContact,IoIosHome } from 'react-icons/io'
import { MdContactPage } from 'react-icons/md'
import { RiTeamFill } from 'react-icons/ri'
import { BiNews } from 'react-icons/bi'
import{ FaBookOpen } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='header navbar bg-white'>
        <div className='navbar-logo col-6'>
           <Link  className='navbar-link' to='/home'>
              <img src='#' alt='SiteLogo'/>
           </Link>
        </div>
        <div className='navabr-right col-6 container'>
            <div className='navbar-right-home  '>
                <NavLink className='navbar-link' to='/home'><IoIosHome className='navbar-right-logo'/> Home</NavLink>
            </div>
           <div className='navbar-right-team'>
               <NavLink className='navbar-link' to='/team'><RiTeamFill className='navbar-right-logo'/> Team</NavLink>
           </div>
           <div className='navbar-right-events'>
               <NavLink className='navbar-link' to='/events'><BiNews className='navbar-right-logo'/> Events</NavLink>
           </div>
           <div className='navbar-right-about'>
               <NavLink className='navbar-link' to='/about'><FaBookOpen className='navbar-right-logo'/> About Us</NavLink>
           </div>
           <div className='navbar-right-contact'>
               <NavLink className='navbar-link' to='/contact'><MdContactPage className='navbar-right-logo'/> Contact Us</NavLink>
           </div>

           <div className='navbar-right-login-profile'>
               <NavLink className='navbar-login' to='/login'>Login</NavLink>
               <NavLink className='navbar-profile' to='/profile'><IoIosContact/></NavLink>

           </div>
        </div>
        
    </div>
  )
}

export default Navbar