import React, {useState} from 'react';
import {Link} from 'react-router-dom';




import './navbar.css';

export const Navbar = () => {

    const [ open, setOpen ] = useState('false');
    const showMenu = () => setOpen(!open);
    const closeMenu = () =>setOpen('false')

    return (
        <div>
            <div className={ open ? 'NavBar-container' : 'NavBar-container2'}>   
                <nav>
                    <ul className='nav-links' >
                        <li><Link onClick={closeMenu} to='/Weather'>Weather</Link></li>
                        <li><Link onClick={closeMenu} to='/'>Music</Link></li>

                    </ul> 
                </nav>
            </div>
            <div onClick={showMenu} className='Hamburger-menu'>
                <div className={open ? 'Hamburger' : 'change line1'}></div>
                <div className={open ? 'Hamburger' : 'change line2'}></div>
                <div className={open ? 'Hamburger' : 'change line3'}></div> 
            </div>
        </div>
  
    )
}
