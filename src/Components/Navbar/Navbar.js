import React from 'react';
import { Link } from 'react-router-dom';
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <Link  to='/profile' className={s.link} > Profile </Link>
            </div>
            <div className={s.item}>
                <Link  to='/dialogs'  className={s.link}> Message </Link>
            </div>
            <div className={s.item} >
                <Link to='/news'>News </Link>
            </div>
            <div className={s.item}>
                <a  href='/music'>Music </a>
            </div>
            <div className={s.item} >
                <Link to='/settings'> Settings </Link>
            </div>
        </nav>

    )
}

export default Navbar;