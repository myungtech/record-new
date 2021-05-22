import React from 'react'
import { Nav, NavbarLogo, NavMenu } from './navbarCSS';
import { FaReact } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import useStyles from './styles';

const Navbar = () => {

    const classes = useStyles();
    const reactIcon = '/logo192.png';

    const user = null;

    return (
        <Nav >
            <NavbarLogo to='/' >
                <img src={reactIcon} alt="icon" height="60" />
            RECORD NEW
            </NavbarLogo>


        </Nav>
    )
}

export default Navbar
