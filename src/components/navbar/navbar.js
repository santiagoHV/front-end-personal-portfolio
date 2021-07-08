import React, {useState} from 'react';
import { Navbar} from 'react-bootstrap'
import './navbar.css'
import Logo from '../../assets/img/logo.png'
import {Link} from "react-router-dom";


const NavbarComponent = (props) => {


    const [localNavItems, setLocalNavItems] = useState([
        {
            'title': 'Home',
            'route': '/home#header',
            'isActive': true
        },
        {
            'title': 'About me',
            'route': '/home#about-me',
            'isActive': false
        },
        {
            'title': 'Study',
            'route': '/home#',
            'isActive': false
        },
        {
            'title': 'Contact me',
            'route': '/home#',
            'isActive': false
        }
    ])
    const [navItems, setNavItems] = useState([
        {
            'title': 'Skills',
            'route': '/skills',
            'isActive': false
        },
        {
            'title': 'Personal projects',
            'route': '/',
            'isActive': false
        },
        {
            'title': 'Experience',
            'route': '/',
            'isActive': false
        },
    ])
    const [toggleMovileNav, setToggleMovileNav]  =  useState(false)


    const renderLocalItems = (list) => {
        return (
            <div className={`sidebar__items ${toggleMovileNav ? '' : 'unToggleMovile'}`}>
                {
                    list.map((item) => {
                        return(
                            <Link className={`nav-link sidebar__items--item ${item.isActive ? 'active' : ''}`}
                               href={item.route}
                               onClick={()=>{selectItem(item.title)}} >
                                {item.title}
                            </Link>
                        )
                    })
                }
            </div>
        )
    };


    const selectItem = itemName => {
        let localItems = [...localNavItems]
        let items = [...navItems]


        localItems.forEach(item =>{
            item.isActive = item.title === itemName;
        })

        items.forEach(item =>{
            item.isActive = item.title === itemName;
        })

        setLocalNavItems(localItems)
        setNavItems(items)
    }

    return(

        <div className={`sidebar ${props.show ? '' : 'unActive'}`}>
            <div className='sidebar__content'>
                <Navbar.Brand className='sidebar__logo-container'>
                    <img src={Logo} height={50} width={50} alt="logo"/>
                    <h3>Santiago Herrera</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white"
                         className="bi bi-list toggle-button" viewBox="0 0 16 16"
                         onClick={()=>{setToggleMovileNav(!toggleMovileNav)}}   >
                        <path fill-rule="evenodd"
                              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </Navbar.Brand>

                {renderLocalItems(localNavItems)}
                {renderLocalItems(navItems)}
            </div>
        </div>

    )
}

export default NavbarComponent;