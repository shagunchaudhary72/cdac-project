import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
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
    const navigate = useNavigate();
    const role = window.sessionStorage.getItem("role");    

    const logoutUser = () => {
        window.sessionStorage.removeItem('user');
        window.sessionStorage.removeItem("id");
        window.sessionStorage.removeItem("email");
        window.sessionStorage.removeItem("name");
        window.sessionStorage.removeItem("age");
        window.sessionStorage.removeItem("universityId");
        window.sessionStorage.removeItem("universityEmail");
        window.sessionStorage.removeItem("universityName");
        window.sessionStorage.removeItem("state");
        window.sessionStorage.removeItem("city");
        window.sessionStorage.removeItem("phone_no");
        window.sessionStorage.setItem("snackbar2", "show");
        window.sessionStorage.removeItem('loggedIn');
        window.sessionStorage.removeItem('role');
        dispatch({type:"USER",payload:false});
        navigate("/login");
    }

    const RenderMenu = () =>{
        if(state && role==="STUDENT"){
            return (
                <>
                <NavDropdown.Item href="/student_dashboard">Dashboard</NavDropdown.Item>
                <NavDropdown.Item onClick={logoutUser}>Log Out</NavDropdown.Item>
                </>
            )
        }
        else if(state && role==="ADMIN"){
            return (
                <>
                <NavDropdown.Item href="/admin_dashboard">Dashboard</NavDropdown.Item>
                <NavDropdown.Item onClick={logoutUser}>Log Out</NavDropdown.Item>
                </>
            )
        }
        else if(state && role==="COLLEGE"){
            return (
                <>
                <NavDropdown.Item href="/college_dashboard">Dashboard</NavDropdown.Item>
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
        <Navbar bg="light" expand="lg" className='sticky-top site-navbar' style={{zIndex:'999'}}>
            <Container>
                <NavLink to="/">
                    <img className="navbar-logo" src={NavbarLogo} alt="ucs_logo" width={300} height={50} />
                </NavLink>
                <Navbar.Toggle className='navbar-toggler' aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end' >
                    <Nav>
                        <NavLink className='navbar-link' to='/home'><IoIosHome className='navbar-right-logo' /> Home</NavLink>
                        <NavLink className='navbar-link' to='/team'><RiTeamFill className='navbar-right-logo' /> Team</NavLink>
                        <NavLink className='navbar-link' to='/events'><BiNews className='navbar-right-logo' /> Events</NavLink>
                        <NavLink className='navbar-link' to='/about'><BiNews className='navbar-right-logo' /> About</NavLink>
                        <NavLink className='navbar-link' to='/contact'><MdContactPage className='navbar-right-logo' /> Contact Us</NavLink>
                        <NavDropdown title={<IoIosContact/>} className="navbar-profile" >
                            <RenderMenu />
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header