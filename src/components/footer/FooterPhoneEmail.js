import React from 'react'
import {AiFillPhone} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'

export default function FooterPhoneEmail() {
    return (
        <>
            <div className='phone-email'>
                <AiFillPhone/>
                <p>+3705568984</p>
            </div>
            <div className='phone-email'>
                <AiOutlineMail/>
                <p>itapizza@info.lt</p>
            </div>
        </>
    )
}
