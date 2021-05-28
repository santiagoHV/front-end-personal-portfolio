import React from 'react';
import {Nav, Navbar} from 'react-bootstrap'
import './navbar.css'
import Logo from '../../assets/img/logo.png'

const NavbarComponent = () => {

    return(

        <div className="sidebar">
            {/*<ul>*/}
            {/*    <li>*/}
            {/*    </li>*/}
            {/*</ul>*/}
            <Nav.Link className="active" href="#home">Home</Nav.Link>
            <Nav.Link href="#about-me">About me</Nav.Link>
            <Nav.Link href="">Contact</Nav.Link>
            <Nav.Link href="">About</Nav.Link>
        </div>

        // <Navbar variant='dark'expand='md' className='navbar'>
        //     <Navbar.Brand className='m-2' href='/'>
        //         <img src={Logo} height={40}/>
        //         SANTIAGO HERRERA
        //     </Navbar.Brand>
        //     <Navbar.Toggle className='m-2' aria-controls='basic-navbar-nav' />
        //     <Navbar.Collapse className='m-2' id='basic-navbar-nav'>
        //         <Nav className='ms-auto navbar-items'>
        //             <Nav.Link href='/'>About me</Nav.Link>
        //             <Nav.Link href='/'>Skills</Nav.Link>
        //             <Nav.Link href='/'>Contact me</Nav.Link>
        //         </Nav>
        //     </Navbar.Collapse>
        // </Navbar>
    )
}

export default NavbarComponent;