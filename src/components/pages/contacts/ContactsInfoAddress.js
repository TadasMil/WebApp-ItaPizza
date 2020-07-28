import React from 'react'
import {MdLocationOn} from 'react-icons/md'

export const ContactsInfoAddress = () => {
    return (
        <div className='contacts-info-data'>
            <p>Adresas</p>
            <div className='contacts-info-value'>
                <span><MdLocationOn/></span>
                <p>Vilnius, Timbarko g. 7</p>
            </div>
        </div>
    )
}
