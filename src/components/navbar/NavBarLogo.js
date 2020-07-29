import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBarLogo({styling}) {
    return (
            <div className={styling}>
               <Link to='/'><img src={ require('../../images/logo-img.png') } alt='logo-img' /></Link>
            </div>
    )
}
