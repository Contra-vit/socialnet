import React from 'react';
import { Link } from 'react-router-dom';
import C from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={C.nav}>
            <div >
                <Link className={C.item} to='/profile'> Profile </Link>
            </div>
            <div>
                <Link className={C.item} to='/message'> Message </Link>
            </div>
            <div >
                <Link className={C.item} to='/news'>News </Link>
            </div>
            <div >
                <Link className={C.item} to='/music'>Music </Link>
            </div>
            <div >
                <Link className={C.item} to='/settings'> Settings </Link>
            </div>
        </nav>

    )
}

export default Navbar;