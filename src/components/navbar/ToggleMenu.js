import React from 'react'
import {Link} from 'react-router-dom'

export default function ToggleMenu({handleOnToggleClick}) {
    return (
        <div className='toggle-menu-links-list'>
           <div className='toggle-menu-links'>
                    <Link to='/' className='links' onClick={handleOnToggleClick}>Pradinis</Link>
                    <Link to='/products' className='links' onClick={handleOnToggleClick}>Meniu</Link>           
                    <Link to='/about' className='links' onClick={handleOnToggleClick}>Apie mus</Link>
                    <Link to='/about' className='links' onClick={handleOnToggleClick}>Kontaktai</Link>
           </div>
        </div>
    )
}
