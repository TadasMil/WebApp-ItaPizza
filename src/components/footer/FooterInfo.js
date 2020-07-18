import React from 'react'

export default function FooterInfo({title, info1, info2, info3, info4}) {
    return (
        <div className='footer-description-element'>
            <h3>{title}</h3>
            <div className='footer-description-info'>
               <div className='footer-description-info-links'>
                    <p>{info1}</p>
                    <p>{info2}</p>
               </div>
               <div className='footer-description-info-links'>
                    <p>{info3}</p>
                    <p>{info4}</p>
               </div>
            </div>
        </div>
    )
}
