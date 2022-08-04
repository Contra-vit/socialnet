import React from 'react';
import C from  './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className= {C.nav}>
            <div >
                <a className= {C.item} href='/profile'> Profile </a>
            </div>
            <div>
                <a className={C.item} href='/message'> Message </a>
            </div>
            <div >
                <a className={C.item} href='/news'>News </a>
            </div>
            <div >
                <a className={C.item} href='/music'>Music </a>
            </div>
            <div > <a className={C.item} href='/settings'> Settings </a>
            </div>
        </nav>

    )
}

export default Navbar;