import React from 'react'
import {FiSend} from 'react-icons/fi'

export default function FooterNewsletter({title, text}) {
    return (
        <div className='footer-description-element'>
            <h3>{title}</h3>
                <div className='subscribe-newsletter'>
                    <p>{text}</p>
                  
                            <input type='email' placeholder='E-paštas'></input>
                            <button>
                                <span className='newsletter-send-icon'>
                                 <FiSend/>
                                </span>
                            </button>
                </div>
        </div>
    )
}
