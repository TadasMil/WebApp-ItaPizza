import React from 'react'
import {FaInstagram} from 'react-icons/fa'
import {AiOutlineFacebook} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
import {FaSpotify} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'

export default function FooterSocial({styling}) {
    return (
       <>
        <div className={styling}>
            <FaInstagram/>
            <span><AiOutlineFacebook/></span>
            <FiTwitter/>
            <span><FaSpotify/></span>
            <AiFillLinkedin/>
        </div>
       </>
    )
}
