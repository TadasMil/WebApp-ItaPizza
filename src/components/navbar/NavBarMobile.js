import React from 'react'
import NavBarLogo from './NavBarLogo'
import {TiThMenu} from 'react-icons/ti'

export default function NavBarMobile() {
    return (
        <div className='nav-mobile'>
                <NavBarLogo styling='nav-mobile-logo'/>
                <div className='nav-mobile-toggle'>
                    <TiThMenu/>
                </div>
        </div>
    )
}
