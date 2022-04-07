import React, { useEffect, useRef, useState } from 'react'
import { Link , NavLink, useNavigate} from 'react-router-dom'
import './Navbar.css';
import { IoIosContact,IoIosHome } from 'react-icons/io'
import { MdContactPage } from 'react-icons/md'
import { RiTeamFill } from 'react-icons/ri'
import { BiNews } from 'react-icons/bi'
import{ FaBookOpen } from 'react-icons/fa'
import {ImMenu2} from 'react-icons/im'
import NavbarLogo from '../../images/navbar-logo.png'

const Navbar = () => {

    // const setPathName = () =>{
    //     // window.localStorage.setItem('path',window.location.pathname);
    // }

    const[ loggedIn, setLoggedIn ] = useState();
    const[ isMenuVisible, setIsMenuVisible ] = useState(false);
    const menu = useRef(null);

    useEffect(() => {
      const userName = window.sessionStorage.getItem('name');
      if( window.sessionStorage.getItem('loggedIn') === 'true')
            setLoggedIn(true);
      if( userName !== null )
        setLoggedIn(true);
      else
        setLoggedIn(false);
 
    },[loggedIn, isMenuVisible]);
    
    const logoutUser = () => {
        window.sessionStorage.removeItem('user');
        window.sessionStorage.removeItem('name');
        alert(" You have been Logged Out !!!");
        setLoggedIn(false);
    }

    const showMenu = () =>{
     if( isMenuVisible === false )
         {
          menu.current.style.display = 'block';
          setIsMenuVisible(true);
         }
      else
     {
      menu.current.style.display = 'none';
      setIsMenuVisible(false);
     }
    }

  return (
    <div className='site-navbar bg-white'>
        <div className='navbar-logo'>
           <Link  className='navbar-link' to='/home'>
              <img src={NavbarLogo} alt='SiteLogo' height={'50vh'} width={'300px'}/>
           </Link>
        </div>
        <div ref={menu} className='navbar-right'>
            <div className='navbar-right-home  '>
                <NavLink className='navbar-link' to='/home'><IoIosHome className='navbar-right-logo'/> Home</NavLink>
            </div>
           <div className='navbar-right-team'>
               <NavLink className='navbar-link' to='/team'><RiTeamFill className='navbar-right-logo'/> Team</NavLink>
           </div>
           <div className='navbar-right-events'>
               <NavLink className='navbar-link' to='/events'><BiNews className='navbar-right-logo' /*onClick={setPathName}*//> Events</NavLink>
           </div>
           <div className='navbar-right-about'>
               <NavLink className='navbar-link' to='/about'><FaBookOpen className='navbar-right-logo'/> About Us</NavLink>
           </div>
           <div className='navbar-right-contact'>
               <NavLink className='navbar-link' to='/contact'><MdContactPage className='navbar-right-logo'/> Contact Us</NavLink>
           </div>

           <div className='navbar-right-login-profile'>
           <NavLink className='navbar-profile' to='/profile'><IoIosContact/></NavLink>
                 { loggedIn ? <NavLink className='navbar-login' to='/home' onClick={logoutUser}>Logout</NavLink> : <NavLink className='navbar-login' to='/login'>Login</NavLink> } 
               

           </div>
        </div>
        <div className='navbar-right-toggler' onClick={showMenu}>
              <ImMenu2  />
           </div>
        
    </div>
  )
}

export default Navbar