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
            <a href="https://www.instagram.com/"  target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
            <a href="https://www.facebook.com/"  target="_blank" rel="noopener noreferrer"><span><AiOutlineFacebook/></span></a>
            <a href="https://www.twitter.com/"  target="_blank" rel="noopener noreferrer"><FiTwitter/></a>
            <a href="https://www.spotify.com/"  target="_blank" rel="noopener noreferrer"><span><FaSpotify/></span></a>
            <a href="https://www.linkedin.com/"  target="_blank" rel="noopener noreferrer"><AiFillLinkedin/></a>
        </div>
       </>
    )
}
