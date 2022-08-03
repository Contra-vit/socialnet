import React from 'react';
import C from  './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className= {C.nav}>
            <div >
                <a className= {C.item} href='/profile'> Profile </a>
            </div>
            <div>
                <a className={C.item} href='/profile'> Message </a>
            </div>
            <div >
                <a className={C.item} href='/profile'>News </a>
            </div>
            <div >
                <a className={C.item} href='/profile'>Music </a>
            </div>
            <div > <a className={C.item} href='/profile'> Settings </a>
            </div>
        </nav>

    )
}

export default Navbar;