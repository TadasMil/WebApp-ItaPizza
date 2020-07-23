import React from 'react'
import {Link} from 'react-router-dom'

export default function ToggleMenu() {
    return (
        <div className='toggle-menu-links-list'>
           <div className='toggle-menu-links'>
                    <Link to='/' className='links'>Pradinis</Link>
                    <Link to='/about' className='links'>Produktai</Link>           
                    <Link to='/about' className='links'>Apie mus</Link>
                    <Link to='/about' className='links'>Kontaktai</Link>
           </div>
        </div>
    )
}
