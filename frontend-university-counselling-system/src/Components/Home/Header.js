import React, { useContext, useEffect, useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css';
import { IoIosContact, IoIosHome } from 'react-icons/io'
import { MdContactPage } from 'react-icons/md'
import { RiTeamFill } from 'react-icons/ri'
import { BiNews } from 'react-icons/bi'
import NavbarLogo from '../../images/navbar-logo.png'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { UserContext } from '../../App';

const Header = () => {

    const {state,dispatch} = useContext(UserContext);

    const [loggedIn, setLoggedIn] = useState();
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [dashboard, setDashboard] = useState('');
    const menu = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const userName = window.sessionStorage.getItem('name');
        if (window.sessionStorage.getItem('loggedIn') === 'true')
            setLoggedIn(true);
        if (userName !== null)
            setLoggedIn(true);
        else
            setLoggedIn(false);

    }, [loggedIn, isMenuVisible, dashboard]);

    const logoutUser = () => {
        window.sessionStorage.removeItem('user');
        window.sessionStorage.removeItem("id");
        window.sessionStorage.removeItem("email");
        window.sessionStorage.removeItem("name");
        window.sessionStorage.removeItem("age");
        window.sessionStorage.setItem("snackbar2", "show");
        window.sessionStorage.removeItem('loggedIn');
        dispatch({type:"USER",payload:false});
        setLoggedIn(false);
        navigate("/login");
    }

    // const showMenu = () => {
    //     if (isMenuVisible === false) {
    //         menu.current.style.display = 'block';
    //         setIsMenuVisible(true);
    //     }
    //     else {
    //         menu.current.style.display = 'none';
    //         setIsMenuVisible(false);
    //     }
    // }

    // const openDashboard = () => {
    //     const userData = JSON.parse(window.sessionStorage.getItem('user'));
    //     if (userData === null) {
    //         alert("Login Required !!");
    //         navigate('/login');
    //     }
    //     else if (userData.role === "ADMIN") {
    //         navigate('/adminDashboard');
    //     } else if (userData.role === "STUDENT") {
    //         navigate('/studentDashboard');
    //     } else if (userData.role === "COLLEGE") {
    //         navigate('/collegeDashboard');
    //     }

    // }

    const RenderMenu = () =>{
        if(state){
            return (
                <>
                <NavDropdown.Item onClick={logoutUser}>Log Out</NavDropdown.Item>
                </>
            )
        }
        else{
            return (
                <>
                <NavDropdown.Item href="/login">Log In</NavDropdown.Item></>
            )
        }
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <NavLink to="/">
                    <img src={NavbarLogo} alt="ucs_logo" width={300} height={50} />
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end' >
                    <Nav>
                        <NavLink className='navbar-link' to='/home'><IoIosHome className='navbar-right-logo' /> Home</NavLink>
                        <NavLink className='navbar-link' to='/team'><RiTeamFill className='navbar-right-logo' /> Team</NavLink>
                        <NavLink className='navbar-link' to='/events'><BiNews className='navbar-right-logo' /> Events</NavLink>
                        <NavLink className='navbar-link' to='/contact'><MdContactPage className='navbar-right-logo' /> Contact Us</NavLink>
                        <NavDropdown title={<IoIosContact/>} className="navbar-profile">
                            <RenderMenu />
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header