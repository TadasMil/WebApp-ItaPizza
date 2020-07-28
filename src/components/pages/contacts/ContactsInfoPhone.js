import React from 'react'
import {AiFillPhone} from 'react-icons/ai'

export const ContactsInfoPhone = () => {
    return (
        <div className='contacts-info-data'>
            <p>Telefonas</p>
            <div className='contacts-info-value'>
                <span><AiFillPhone/></span>
                <p>+3705845895</p>
            </div>
        </div>
    )
}
