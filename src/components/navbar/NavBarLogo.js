import React from 'react'

export default function NavBarLogo({styling}) {
    return (
            <div className={styling}>
                <img src={ require('../../images/logo-img.png') } alt='logo-img' />
            </div>
    )
}
