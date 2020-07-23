import React from 'react'
import {Link} from 'react-router-dom'

export default function Buttons({className, buttonText, link}) {
    return (  
            <button className={className}>
                <Link to={link}>{buttonText}</Link>
            </button>
    )
}
