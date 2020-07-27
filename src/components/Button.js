import React from 'react'
import {Link} from 'react-router-dom'

export default function Buttons({className, buttonText, link}) {
    return (  
        <Link to={link}><button className={className}><p>{buttonText}</p></button></Link>
    )
}
