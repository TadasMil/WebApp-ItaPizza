import React from 'react'
import {FaInstagram} from 'react-icons/fa'
import {AiOutlineFacebook} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'

export default function FooterSocial() {
    return (
       <>
        <div className='social'>
            <FaInstagram/>
            <AiOutlineFacebook/>
            <FiTwitter/>
        </div>
       </>
    )
}
