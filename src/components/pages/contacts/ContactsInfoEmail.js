import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'

export const ContactsInfoEmail = () => {
    return (
        <div className='contacts-info-data'>
            <p>Elektroninis paštas</p>
            <div className='contacts-info-value'>
                <span><AiOutlineMail/></span>
                <p>itapizza@inbox.lt</p>
            </div>
        </div>
    )
}
