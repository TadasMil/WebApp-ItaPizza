import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        
        <nav className="nav-bar">
            
                <div className='nav-bar-elements'>
                    <div className="nav-bar_logo">
                        <img src={ require('../images/logo-img.png') } />
                    </div>
                    <div className='nav-bar-links'>
                    <Link to='/' className='links'>Pradinis</Link>
                    <Link to='/about' className='links'>Apie Mus</Link>
                    <Link to='/about' className='links'>Produktai</Link>
                    <Link to='/about' className='links'>Kontaktai</Link>
                    </div>
                </div>
            
        </nav>
    )
}
