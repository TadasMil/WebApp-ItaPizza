import React from 'react'
import {Link} from 'react-router-dom'
import NavBarLogo from './NavBarLogo'


export default function NavBarLinks() {
   
    return (
        <div className='nav-bar-links'>
                <div className='nav-bar-link-list'>
                    <Link to='/' className='links'>Pradinis</Link>
                    <Link to='/products' className='links'>Meniu</Link>           
                    </div>
                    <NavBarLogo styling={"nav-bar_logo"}/>
                    <div className='nav-bar-link-list'>
                    <Link to='/about' className='links'>Apie mus</Link>
                    <Link to='/about' className='links'>Kontaktai</Link>
                </div>
        </div>
    ) 
}
